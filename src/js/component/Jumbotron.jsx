import React from "react";

const Jumbotron = () => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="jumbotron jumbotron-fluid col-8">
					<div className="container">
						<h1 className="display-4">A Warm Welcome!</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Duis sed diam tincidunt, condimentum ipsum
							elementum, tempor sapien. Donec finibus consectetur
							pellentesque. Etiam ut gravida nunc. Morbi consequat
							mattis orci.
						</p>
						<button type="button" class="btn btn-primary">
							Call to action!
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Jumbotron;
