import { useState } from "react";

const Register = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        age: "",
        dateOfBirth: "",
        gender: "",
        contact: "",
        email: "",
        address: "",
        qualification: "",
        category: "",
        caste: "",
        aadhar: null,
        marksheet: null,
        casteCertificate: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="p-6 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                ✕
            </button>
            <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-gray-600 mb-2">First Name</label>
                        <input type="text" name="firstName" placeholder="Enter your Name" value={formData.firstName} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Age</label>
                        <input type="text" name="age" placeholder="Enter your Age" value={formData.age} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Date of Birth</label>
                        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Gender</label>
                        <input type="text" name="gender" placeholder="Enter your Gender" value={formData.gender} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Contact</label>
                        <input type="text" name="contact" placeholder="Enter your Contact number" value={formData.contact} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Current Address</label>
                        <input type="text" name="address" placeholder="Enter your Address" value={formData.address} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Highest Qualification</label>
                        <input type="text" name="qualification" placeholder="Enter your Qualification" value={formData.qualification} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Category</label>
                        <input type="text" name="category" placeholder="Select Category" value={formData.category} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Caste</label>
                        <input type="text" name="caste" placeholder="Enter your Caste" value={formData.caste} onChange={handleInputChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Upload Aadhar (max 130 kb)</label>
                        <input type="file" name="aadhar" onChange={handleFileChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Upload Marksheet (max 130 kb)</label>
                        <input type="file" name="marksheet" onChange={handleFileChange} className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Upload Caste Certificate (max 130 kb)</label>
                        <input type="file" name="casteCertificate" onChange={handleFileChange} className="w-full p-2 border rounded" />
                    </div>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600">Register</button>
            </form>
        </div>
    );
};

export default Register;