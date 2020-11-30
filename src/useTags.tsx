import {useState} from 'react';

const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<string[]>(['衣服', '吃饭', '住宿', '出行']);
  return {tags, setTags};
};

export {useTags};