import React from 'react';

export default class Counter extends React.Component {
    state = {
        name: "", surname: "",
        names: []

    };
    render() {

        const { name, surname, names } = this.state;
       // console.log("names",names)
        return (
            <div>
                <label>your name?</label> <br />
                <input
                    value={name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                />
                <h2>{name}</h2>


                <label>your name?</label> <br />
                <input
                    value={surname}
                    onChange={(event) => this.setState({ surname: event.target.value })}
                />
                <h2>{surname}</h2>


                <button
                    onClick={() => {
                        this.setState({
                            names: [...names, { surname, name }],
                            surname: '',
                            name: ''
                        });
                    }}
                >
                    Ajouter
    </button>
                {names.map((name,  index) => (
                    <h2 key={index}>{name.name} {name.surname}</h2>
                ))}
            </div>
        );
    }
}