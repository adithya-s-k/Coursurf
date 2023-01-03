require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.DATABASE, connectionParams);

  mongoose.connection.on('connected', () => {
    console.log('Connected to database sucessfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error while connecting to database :' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongodb connection disconnected');
  });
};

dbConnect();

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  website: { type: [String], required: false },
  company: { type: [String], required: false },
  certificate: { type: [String], required: false },
  rating: { type: Number, required: false },
  hours: { type: Number, required: false },
  video: { type: String, required: false },
  link: { type: String, required: false },
});

const Courses = mongoose.model('courses', coursesSchema);

const coursesRoute = router.get('/courses', async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    let sort = req.query.sort || 'rating';
    let website = req.query.website || 'All';
    let company = req.query.company || 'All';
    let certificate = req.query.certificate || 'All';

    const websiteOptions = [
      'Udemy',
      'Coursera',
      'Edx',
      'Simplilearn',
      'Shaw Academy',
    ];

    const companyOptions = ['Google', 'Microsoft', 'IBM', 'Facebook', 'Amazon'];

    const certificateOptions = ['Free Certification', 'Paid Certification'];

    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'asc';
    }

    website === 'All'
      ? (website = [...websiteOptions])
      : (website = req.query.website.split(','));

    company === 'All'
      ? (company = [...companyOptions])
      : (company = req.query.company.split(','));

    certificate === 'All'
      ? (certificate = [...certificateOptions])
      : (certificate = req.query.certificate.split(','));

    final = [...website, ...company, ...certificate];

    if (
      website.length === 5 &&
      company.length === 5 &&
      certificate.length >= 1
    ) {
      keyword = 'certificate';
    }
    if (
      company.length === 5 &&
      website.length >= 1 &&
      certificate.length === 2
    ) {
      keyword = 'website';
    }
    if (
      company.length >= 1 &&
      website.length === 5 &&
      certificate.length === 2
    ) {
      keyword = 'company';
    }
    if (
      website.length === 5 &&
      company.length === 5 &&
      certificate.length == 2
    ) {
      keyword = 'website' || 'company' || 'certificate';
    }

    // console.log(keyword);

    const courses = await Courses.find({
      name: { $regex: search, $options: 'i' },
    })
      .where(keyword)
      .in(final)
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    // console.log(final);

    const total = await Courses.countDocuments({
      website: { $in: final },
      name: { $regex: search, $options: 'i' },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      website: websiteOptions,
      company: companyOptions,
      certificate: certificateOptions,
      courses,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://coursurf-express.onrender.com'],
  })
);

app.use('/api', coursesRoute);

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
