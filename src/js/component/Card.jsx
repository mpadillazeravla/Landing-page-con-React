import React from "react";

const Card = () => {
	return (
		<>
			<div className="card col-2 text-center">
				<img
					src="https://picsum.photos/300/300"
					className="card-img-top"
					alt="img"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis sed diam tincidunt
					</p>
				</div>
				<div class="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;
