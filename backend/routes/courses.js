const router = require('express').Router();
const Courses = require('../models/Courses');
const courses = require('../config/courses.json');

router.get('/courses', async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    let sort = req.query.sort || 'rating';
    let genre = req.query.genre || 'All';
    let website = req.query.website || 'All';

    const genreOptions = [
      'Action',
      'Romance',
      'Fantasy',
      'Drama',
      'Crime',
      'Adventure',
      'Thriller',
      'Sci-fi',
      'Music',
      'Family',
    ];
    const websiteOptions = [
      'Udemy',
      'Coursera',
      'Edx',
      'Simplilearn',
      'Shaw Academy',
    ];

    const companyOptions = ['Google', 'Microsoft', 'IBM', 'Facebook', 'Amazon'];

    const certificateOptions = ['Free Certification', 'Paid Certification'];

    genre === 'All'
      ? (genre = [...genreOptions])
      : (genre = req.query.genre.split(','));
    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    website === 'All'
      ? (website = [...websiteOptions])
      : (website = req.query.website.split(','));
    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'asc';
    }

    const courses = await Courses.find({
      name: { $regex: search, $options: 'i' },
    })
      .where('website')
      .in([...website])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Courses.countDocuments({
      website: { $in: [...website] },
      name: { $regex: search, $options: 'i' },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      genres: genreOptions,
      website: websiteOptions,
      courses,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// const insertMovies = async () => {
//   try {
//     const docs = await Courses.insertMany(courses);
//     return Promise.resolve(docs);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };
// insertMovies()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

module.exports = router;
