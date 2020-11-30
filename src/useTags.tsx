import {useState} from 'react';


const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id: 1, name: '衣服'},
    {id: 2, name: '吃饭'},
    {id: 3, name: '住宿'},
    {id: 4, name: '出行'},
  ]);
  return {tags, setTags};
};

export {useTags};