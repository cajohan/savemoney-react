import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣服'},
        {id: createId(), name: '吃饭'},
        {id: createId(), name: '住宿'},
        {id: createId(), name: '出行'},
      ];
    }
    setTags(localTags);
  }, []); //组件挂载时运行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    // const updateTag = (id: number, obj: { name: string }) => {
    // //获取操作的tag的下标
    // const index = findTagIndex(id);
    // //深拷贝
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // //修改该tag
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
    setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
  };
  const deleteTag = (id: number) => {
    // // 获取你要删的 tag 的下标
    // const index = findTagIndex(id);
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // // 把 tagsClone 的第 index 删掉
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('新标签名称为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  return {tags, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};