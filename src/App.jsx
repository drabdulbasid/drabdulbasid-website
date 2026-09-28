import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import PublicationsPage from './pages/PublicationsPage';
import CertificationsPage from './pages/CertificationsPage';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="flex min-h-[100dvh] flex-col">
				<Navbar />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:slug" element={<ArticlePage />} />
						<Route path="/publications" element={<PublicationsPage />} />
					<Route path="/certifications" element={<CertificationsPage />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
