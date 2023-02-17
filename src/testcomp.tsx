import classes from './testcomp.module.css';

export interface TestCompProps {
    text: string
}

export default function TestComp({ text }: TestCompProps) {
    return (
        <div className={classes.container}>
            {text}
        </div>
    )
}