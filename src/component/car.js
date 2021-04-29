export default function Car(props) {

    let {model, description, power, volume, xxx} = props;
    console.log(xxx || 'adad');

    return (
        <div>
            <h3> {model}</h3>
            <p>{description}</p>
            <p>p{power} {volume} </p>
            <div>{xxx}</div>
        </div>
    );
};