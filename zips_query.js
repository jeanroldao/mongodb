db.zips.aggregate([
  {
    $project: {
      _id:0,
      first_char: {$substr : ["$city",0,1]},
      pop: 1
    }	 
  },
  {
    $match: {
      first_char: {$gte: '0', $lte: '9'}
    }
  },
  {
    $group: {
      _id: null,
      rural_pop: {$sum: '$pop'}
    }
  }
])