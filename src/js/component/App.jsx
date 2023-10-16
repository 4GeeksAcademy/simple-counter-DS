import React from "react";

//create your first component
const App = (props) => {
	return (
		// Container para centrar elemento en el body
		<div className="container d-flex justify-content-center align-items-center py-4 px-5">

			{/* Container de counter para dar color y estilos */}
			<div className="bg-dark text-white justify-content-center align-items-center p-2">
				
				{/* Contador */}
				<div className="row counter py-4 px-4">
					<h2 className="col-2"> 
						<i class="far fa-clock"></i> 
					</h2>
					<h2 className="col-2"> {props.num5} </h2>
					<h2 className="col-2"> {props.num4} </h2>
					<h2 className="col-2"> {props.num3} </h2>
					<h2 className="col-2"> {props.num2} </h2>
					<h2 className="col-2"> {props.num1} </h2>
				</div>
			</div>
		</div>
	);
};

export default App;