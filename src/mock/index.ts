import Mock from 'mockjs';

const newListData = {
  'list|10': [{
    'title': '@ctitle(1,3)',
    'description': '@paragraph(1,5)',
    'creator': '@first',
    'id|+1': 1,
    'create_at': '@datetime',
    'comments|5-10': [{
      'creator': '@first',
      'content': '@paragraph(5,10)',
      'create_at': '@datetime'
    }],
  }]
}

Mock.mock('/api/news/list', 'get', newListData)
