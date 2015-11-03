(function(){
  var updateList = [];
  var c = db.students.find();
  
  while (c.hasNext()) {
    var s = c.next();
    var scores = s.scores;
    scores.sort(function(a, b){
      var v = {
        exam: 1,
        quiz: 2,
        homework: 3
      };
      return v[a.type] - v[b.type] || b.score - a.score;
    });
    scores.pop();
    //printjson(scores);
    updateList.push({id:s._id, scores:scores});
  }
  
  for (var i = 0; i < updateList.length; i++) {
    var o = updateList[i];
    db.students.update({_id: o.id}, {$set:{scores:o.scores}});
  }
})()