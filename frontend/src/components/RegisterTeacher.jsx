import React from 'react';

const RegisterTeacher = () => {
    const handleSubmit = (event) => {
        // Handle form submission
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="container mx-auto py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 mt-10">Welcome to Tutor Finder</h1>
                <p className="text-lg text-gray-600">
                    Helping tutors like you connect with students and build successful tutoring careers.
                </p>
            </div>
            <div className="mb-8 mx-auto max-w-lg">
                <h2 className="text-2xl font-bold mb-4">How We Help Tutors:</h2>
                <p className="mb-4">
                    Tutor Finder enables tutors to build connections with learners who can benefit most from their experience. Human connection is at the heart of what we do, who we are, and how we help students thrive. We take the behind-the-scenes administration off your plate, allowing you to set your own schedule, and use our award-winning technology to help students grow and succeed.
                </p>

            </div>
            <div className="mb-8 mx-auto max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Register as a Tutor:</h2>
                <form class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
  <label class="block mb-2" for="fname">Enter your Name:</label>
  <input type="text" id="fname" name="fname" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Name" />

  <div class="flex items-center mb-4">
    <label class="inline-flex items-center mr-6">
      <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
      <span class="ml-2 text-gray-700">Male</span>
    </label>
    <label class="inline-flex items-center">
      <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
      <span class="ml-2 text-gray-700">Female</span>
    </label>
  </div>

  <label class="block mb-2" for="age">Enter your age:</label>
  <input type="age" id="age" name="age" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Age" />

  <label class="block mb-2" for="email">Enter your Email:</label>
  <input type="email" id="email" name="email" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Email" />

  <label class="block mb-2" for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Phone Number" required />

  <label class="block mb-2" for="qual">Qualification:</label>
  <input type="text" id="qual" name="qual" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Qualification" />

  <label class="block mb-2" for="spec">What Subjects do you specialize in:</label>
  <input type="text" id="spec" name="spec" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Specializations" />

  <label class="block mb-2" for="address">Address:</label>
  <input type="text" id="address" name="address" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Address" />

  <label class="block mb-2" for="photo">Passport Size Photo:</label>
  <input type="file" id="photo" name="photo" class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" accept="image/*" required />

  <button type="submit" class="block w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Submit</button>
</form>

            </div>
        </div>
    );
};

export default RegisterTeacher;


