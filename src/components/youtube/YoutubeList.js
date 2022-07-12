import React from 'react';
import YoutubeItem from './YoutubeItem';


const YoutubeList = (props) => {
  console.log(props);
    const youtubeData = [
        {
          id: 1,
          title: "Hoa anh đào",
          author: "Mẫn Nha",
          image:
            "https://images.unsplash.com/photo-1653764930857-0b784971ca59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
          avatar:
            "https://images.unsplash.com/photo-1655481727563-c4e78cc4e515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        },
        {
          id: 2,
          title: "Hiphop never die",
          author: "Tiểu Mei",
          image:
            "https://images.unsplash.com/photo-1655574684247-b5f5c05c3758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          avatar:
            "https://images.unsplash.com/photo-1501684399321-1dc61aaea760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        },
        {
          id: 3,
          title: "Dalat Trip",
          author: "A già",
          image:
            "https://images.unsplash.com/photo-1630523628199-4047e0a5df9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          avatar:
            "https://images.unsplash.com/photo-1509029032154-54ba8b3216d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 4,
          title: "My friend",
          author: "Mp | Mặp",
          image:
            "https://images.unsplash.com/photo-1630523628239-576bc71b6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          avatar:
            "https://images.unsplash.com/photo-1527106670449-cf7c7e31af4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
      ];
    return (
      <div className="youtube-list">
      {props.children}
      {youtubeData.map((item, index) => (

        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
        
      ))}
    </div>
    );
};

export default YoutubeList;