
interface Props {
    title: string;
    count: number;
}

interface IProps {
    name: string;
    age: number;
}

const MyComponent: React.FC<Props> = ({ title, count }): IProps => {

}

