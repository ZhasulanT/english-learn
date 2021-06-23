import React from "react";
import { connect } from 'react-redux';
import { addCommentActionCreator, updateTextActionCreator } from "../redux/reducer";
import Comment from "../components/Comment";
import { compose } from "redux";


const About = (props) => {
   console.log(props.comments)

   let commentsElements = props.comments.map((p,index) => <Comment comment={p.comment} key={index}/>);

   let newCommentsElements = React.createRef();

   let AddComment = () => {
      props.addCommentActionCreator(newCommentsElements.current.value)
   }

   let onChange = () => {
      props.updateTextActionCreator(newCommentsElements.current.value)
   }

   return (
      <div>
    <div className="about-block">
    <p>Программа расчитана для лиц изучающих Английский язык</p>
    <div>
     <h1>комментарий</h1>
     {commentsElements}
     <textarea ref={newCommentsElements} onChange={onChange} value={props.newText}  />
     <button onClick={AddComment}>Add</button>
  </div>

  </div>
  
  <div className="footer">
        
        </div>
  </div>
   );
}




let mapStateToProps = (state) => {
  return {
   comments: state.commentsReducer.comments,
   newText: state.commentsReducer.newText
    
  }
}







export default compose(connect(mapStateToProps,{addCommentActionCreator, updateTextActionCreator}))(About);

