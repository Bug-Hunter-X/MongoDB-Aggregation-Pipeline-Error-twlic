```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$group: { _id: '$field', count: {$sum: 1} }},
  {$sort: {count: -1}},
  {$limit: 10},
  {$project: {_id: 0, field: '$_id', count: 1}}
])
```