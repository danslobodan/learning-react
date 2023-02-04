import { ChildAsFunctionComponent as Child } from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log('Clicked!')}>
        SomeChildren
    </Child>
}

export default Parent;