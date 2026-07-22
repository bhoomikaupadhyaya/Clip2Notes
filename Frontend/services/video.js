import api from "./api";

// Upload Video
export const uploadVideo = async (formData) => {
  const response = await api.post("/videos/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Get All Videos
export const getVideos = async () => {
  const response = await api.get("/videos");
  return response.data;
};

// Get One Video
export const getVideoById = async (id) => {
  const response = await api.get(`/videos/${id}`);
  return response.data;
};

// AI Generated Notes
export const getNotes = async (id) => {
  const response = await api.get(`/videos/${id}/notes`);
  return response.data;
};

// AI Generated Quiz
export const getQuiz = async (id) => {
  const response = await api.get(`/videos/${id}/quiz`);
  return response.data;
};

// AI Flashcards
export const getFlashcards = async (id) => {
  const response = await api.get(`/videos/${id}/flashcards`);
  return response.data;
};

// AI Chat
export const askQuestion = async (id, message) => {
  const response = await api.post(`/videos/${id}/chat`, {
    message,
  });

  return response.data;
};