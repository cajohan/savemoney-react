import {useState} from 'react';
import {createId} from './lib/createId';


const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id: createId(), name: '衣服'},
    {id: createId(), name: '吃饭'},
    {id: createId(), name: '住宿'},
    {id: createId(), name: '出行'},
  ]);
  return {tags, setTags};
};

export {useTags};