import classes from './testcontainer.module.css';

export interface TestContainerProps {
    children: React.ReactNode
}

export default function TestContainer({ children }: TestContainerProps) {
    return (
        <div className={classes.container}>
            <h1>Container</h1>
            {children}
        </div>
    );
}