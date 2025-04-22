import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Project from "./Project";
import ServicesPage from "./ServicesPage";
import NotFound from "./NotFound";
import StrategicPrintProcurement from "./service/StrategicPrintProcurement";
import RetailBranding from "./service/RetailBranding";
import StoreDisplays from "./service/StoreDisplays";
import CreativeProduction from "./service/CreativeProduction";
import RetailActivation from "./service/RetailActivation";
import EventMarketing from "./service/EventMarketing";
import CorporateGifting from "./service/CorporateGifting";
import ContentDevelopment from "./service/ContentDevelopment";
import RetailStoreFabrication from "./service/RetailStoreFabrication";
import GetInTouchForm from "./components/GetInTouchForm";

function App() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/services">
					<Route index element={<ServicesPage />} />
					<Route
						path="Strategic-Print-Procurement"
						element={<StrategicPrintProcurement />}
					/>
					<Route path="Retail-Branding" element={<RetailBranding />} />
					<Route path="store-Displays-POSM" element={<StoreDisplays />} />
					<Route path="Creative-Production" element={<CreativeProduction />} />
					<Route path="Retail-Activation" element={<RetailActivation />} />
					<Route path="Event-Marketing" element={<EventMarketing />} />
					<Route path="Corporate-Gifting" element={<CorporateGifting />} />
					<Route path="Content-Development" element={<ContentDevelopment />} />
					<Route
						path="Retail-Store-Fabrication"
						element={<RetailStoreFabrication />}
					/>
				</Route>
				<Route path="/project" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
				<Route path='/get-in-touch' element={<GetInTouchForm />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
