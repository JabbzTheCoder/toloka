# Toloka: A Real-time Sign Language Interpretation Web Application

**Project Overview:**

Toloka is a web application designed to facilitate communication between individuals who use sign language and those who do not. It utilizes computer vision and machine learning to interpret sign language gestures from real-time video input and translate them into text or audio output.

**Key Features:**

  * Real-time sign language gesture recognition.
  * Text and audio translation of recognized signs.
  * User-friendly web interface.
  * Integration with real-time video conferencing platforms.

**Technologies Used:**

  * **Frontend:** Next.js, Tailwind CSS, JavaScript, HTML, CSS
  * **Backend:** Python, Django REST Framework
  * **Machine Learning:** TensorFlow/PyTorch, OpenCV
  * **Database:** MongoDB
  * **Cloud Platform:** [Specify your chosen cloud platform - e.g., AWS, GCP, Azure]
  * **Real-time Communication:** WebRTC

**Project Structure:**

```
toloka/
├── backend/ 
│   ├── api/ 
│   │   ├── models/ 
│   │   ├── serializers/ 
│   │   ├── views/ 
│   │   ├── urls.py
│   ├── models/ 
│   ├── utils/ 
│   ├── manage.py
│   └── ... 
├── frontend/ 
│   ├── components/ 
│   ├── pages/ 
│   ├── public/ 
│   ├── styles/ 
│   └── ... 
├── data/ 
│   ├── datasets/ 
│   └── models/ 
├── documentation/ 
├── requirements.txt 
├── .env 
└── README.md 
```

**Getting Started:**

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    cd backend
    pip install -r requirements.txt 
    cd frontend
    npm install 

    ```

3.  **Set up environment variables:**

      * Create a `.env` file in the root directory.
      * Add your environment variables (e.g., API keys, database credentials).

4.  **Run the development server:**

      * **Backend:** `python manage.py runserver`
      * **Frontend:** `npm run dev`



