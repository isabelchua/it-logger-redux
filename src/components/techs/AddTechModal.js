import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.js";

const AddTechModal = () => {
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");

	const onSubmit = () => {
		if (firstname === "" || lastname === "") {
			M.toast({ html: "Please enter the first and last name" });
		} else {
			console.log(firstname, lastname);
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstname"
							value={firstname}
							onChange={e => setFirstName(e.target.value)}
							id=""
						/>
						<label htmlFor="firstname" className="active">
							Firstname
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastname"
							value={lastname}
							onChange={e => setFirstName(e.target.value)}
							id=""
						/>
						<label htmlFor="lastname" className="active">
							Lastname
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue btn"
				>
					Enter
				</a>
			</div>
		</div>
	);
};

export default AddTechModal;
