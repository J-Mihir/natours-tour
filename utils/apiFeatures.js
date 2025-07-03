class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    // Build query
    // 1A) Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]); // so no need to save new array

    // 1B) Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // replace gte, gt, lte, lt with $gte, $gt, $lte, $lt
    this.query.find(JSON.parse(queryStr));
    return this;
  }
  sort() {
    // 2) Sorting
    if (this.queryString.sort) {
      const sortby = this.queryString.sort.split(',').join(' '); // sort by multiple fields
      this.query = this.query.sort(sortby);
    } else {
      this.query = this.query.sort('-createdAt'); // default sort by createdAt in descending order
    }
    return this;
  }
  limitFields() {
    // 3) Field limiting
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' '); // select multiple fields
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v'); // exclude __v field
    }
    return this;
  }
  paginate() {
    // 4) Pagination
    const page = this.queryString.page * 1 || 1; // convert to number
    const limit = this.queryString.limit * 1 || 100; // convert to number
    const skip = (page - 1) * limit; // skip the first (page - 1) * limit documents

    this.query = this.query.skip(skip).limit(limit); 

    if (this.queryString.page) {
      const numTours = Tour.countDocuments();
      if (skip >= numTours) throw new Error('This page does not exist');
    }
    return this;
  }
}

module.exports = APIFeatures;