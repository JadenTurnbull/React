import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard > 
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo="Today at 4:20PM"
                    message="Well Done!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo="Today at 6:01PM"
                    message="Amazing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 2:13AM"
                    message="Mediocre"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));