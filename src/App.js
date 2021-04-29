import Car from "./component/car";

export default function App() {
    return (
        <div>

            <Car
                model={'BMW'}
                description={'super get'}
                power={256}
                volume={3}
            />
            <Car model={'Dodge'}
                 description={'sX5 electro car '}
                 power={300}
                 volume={5}
            />
            <Car model={'VIPER'}
                 description={'SX8 Super get electro'}
                 power={400}
                 volume={8}
            />

        </div>
    );
};