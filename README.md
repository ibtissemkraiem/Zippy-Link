# ZippyLink API 🚀



This is a simple URL shortening service built with **Node.js, Express, MongoDB, and React**.



---



## 📌 Features

- Shorten long URLs 📏

- Redirect short URLs 🔄

- API endpoints for testing 🛠

- Simple frontend for usage 💻



---



## 🛠️ Tech Stack

- **Backend:** Node.js, Express, MongoDB

- **Frontend:** React.js

- **Database:** MongoDB Atlas

- **Testing:** Jest, Supertest

- **Deployment:** Render (Backend) & Vercel (Frontend)



---



## 🚀 How to Run Locally



### 


```sh
1️⃣ Clone the Repository

git clone https://github.com/ibtissemkraiem/Zippy-Link.git

cd zippy-Link



2️⃣ Install Dependencies

cd zippy-link-backend

npm install

cd zippylink-frontend

npm install



3️⃣ Set Up MongoDB

• Local MongoDB: Run mongod

• MongoDB Atlas: Use your database URL in .env



4️⃣ Start the Server

cd zippy-link-backend

node server.js


Server will run on http://localhost:5000



5️⃣ Start the Frontend



cd zippylink-frontend

npm start



Frontend will run on http://localhost:3000



📌 API Endpoints



1️⃣ Shorten a URL

• URL: POST /shorten

• Body:



{ "longUrl": "https://www.google.com" }





• Response:



{ "shortUrl": "http://localhost:5000/_yIv5kzM3" }







2️⃣ Redirect to Original URL

• URL: GET /:shortUrl

• Example: GET http://localhost:5000/_yIv5kzM3

• Response: Redirects to the original URL.




📌 Deployment

• Backend: Deployed on Render →  https://zippy-link.onrender.com

• Frontend: Deployed on Vercel → https://zippy-linke.vercel.app



✅ Testing



To run tests, execute:



npm test



📌 Submission

• GitHub Repo: Yhttps://github.com/ibtissemkraiem/Zippy-Link.git

• Backend URL: https://zippy-link.onrender.com

• Frontend URL: https://zippy-linke.vercel.app



📌 Author



👩‍💻 Ibtissem Kraiem

📧 ibtissem.kraiem2@gmail.com



