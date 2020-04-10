
var React = require('react');

class Recipe extends React.Component {
    render() {



        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body style={{ backgroundColor: "lightblue" }}>
                    <div className="container mw-50 w-50">
                        <h1 className="text-center font-italic"><u><strong>View Recipe</strong></u></h1>


                        <div className="card text-center text-black bg-light mb-3">
                            <div className="card-body">
                                <h5 className="card-title text-left"><strong>Title: </strong>{this.props.title}</h5>
                                <h5 className="card-title text-left"><strong>Ingredients: </strong>{this.props.ingredients}</h5>
                                <h5 className="card-title text-left"><strong>Instructions: </strong>{this.props.instructions}</h5>




                            </div>
                        </div>
                      
                        <div className="text-center">
                            <br />
                            <a href={`/edit-recipes/${this.props.id}`} className="btn btn-primary w-50">Edit Recipe</a>
                            <br /><br />
                            <a href="/view-recipes" className="btn btn-primary w-50">Recipe List</a>
                            <br /><br />
                            <a href="/" className="btn btn-primary w-50">Home</a>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Recipe;