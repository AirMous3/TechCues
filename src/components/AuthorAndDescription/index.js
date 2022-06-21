import {Author, Description} from './components';

export const AuthorAndDescription = ({author, description}) => {
    return <div>
        <Author>{author}</Author>
        <Description>{description}</Description>
    </div>
}
