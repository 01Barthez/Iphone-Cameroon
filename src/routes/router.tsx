import { createBrowserRouter, Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/custom/ScrollToTop'
import Navbar from '@/layouts/navbar/Navbar'
import Footer from '@/layouts/footer/Footer'
import PageError from '@/pages/error/PageError'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import VerifyOTP from '@/pages/auth/VerifyOTP'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import ChangePassword from '@/pages/auth/ChangePassword'
import Blog from '@/pages/blog/Blog'
import AboutUs from '@/pages/setting/AboutUs'
import Products from '@/pages/products/Products'
import ProductDetail from '@/pages/products/ProductDetail'
import ProductCategory from '@/pages/products/ProductCategory'
import Account from '@/pages/account/Account'
import Order from '@/pages/order/Order'
import Dashboard from '@/pages/dashboard/Dashboard'
import Wishlist from '@/pages/wishlist/Wishlist'
import ContactUs from '@/pages/setting/ContactUs'
import FAQ from '@/pages/setting/FAQ'
import PrivacyPolicy from '@/pages/setting/PrivacyPolicy'
import Support from '@/pages/setting/Support'
import TermsAndConditions from '@/pages/setting/TermsAndConditions'
import Checkout from '@/pages/checkout/Checkout'
import ShoppingCard from '@/pages/shopping/Shopping'
import SearchResult from '@/pages/search-result/SearchResult'
import ProductReviews from '@/pages/products/ProductReviews'
import Setting from '@/pages/account/Setting'
import Notification from '@/pages/notifications/Notification'
import Promotion from '@/pages/promotions/Promotion'
import TrackOrder from '@/pages/order/TrackOrder'
import RefundPolicy from '@/pages/setting/RefundPolicy'
import DeliveryPolicy from '@/pages/setting/DeliveryPolicy'
import PrivateRoute from '@/components/custom/PrivateRoute'
import Return from '@/pages/return/Return'
import Home from '@/pages/home/Home'

// const Home = lazy(() => import('@/pages/home/Home'))

const userNameSlug = 'barthez';

/**
 * Creates a router with specified routes and elements for each route.
 * @param {Array} routes - An array of route objects containing path and element information.
 * @returns None
 */

const Router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Outlet />

				{/* To scroll to top each time that we change routes */}
				<ScrollToTop />
			</>
		),

		// Page erreur
		errorElement: <PageError />,

		children: [
			{
				path: '/',
				element: <>
					<Navbar />
					<Outlet />
					<Footer />
				</>,
				children: [
					{
						path: '/',
						element: <Home />
					},

					{
						path: '/blog',
						element: <Blog />
					},

					// Follow process to bye product
					{
						path: 'card',
						element: <ShoppingCard />
					},

					{
						path: 'checkout',
						element: <Checkout />
					},

					// Product Group
					{
						path: '/products',
						element: <Outlet />,
						children: [
							{
								path: '/',
								element: <Products />
							},

							{
								path: ':productID',
								element: <ProductDetail />
							},

							{
								path: ':productID/reviews',
								element: <ProductReviews />
							},

							// Products Categories
							{
								path: 'category/:categoryID',
								element: <ProductCategory />
							},

							// Searched product
							{
								path: 'search',
								element: <SearchResult />
							}
						]
					},


					// Account Group
					{
						path: '',
						element: <Outlet />,
						children: [
							{
								path: '/account',
								element: (
									<PrivateRoute>
										<Account />
									</PrivateRoute>
								)
							},

							{
								path: `/${userNameSlug}`,
								element: <Outlet />,
								children: [
									{
										path: 'setting',
										element: (
											<PrivateRoute>
												<Setting />
											</PrivateRoute>
										)
									},

									{
										path: 'notifications',
										element: (
											<PrivateRoute>
												<Notification />
											</PrivateRoute>
										)
									},

									{
										path: 'promotions',
										element: (
											<PrivateRoute>
												<Promotion />
											</PrivateRoute>
										)
									},

									{
										path: 'orders',
										element: (
											<PrivateRoute>
												<Order />
											</PrivateRoute>
										)
									},

									{
										path: 'track-order/:orderID',
										element: (
											<PrivateRoute>
												<TrackOrder />
											</PrivateRoute>
										)
									},

									{
										path: 'returns',
										element: (
											<PrivateRoute>
												<Return />
											</PrivateRoute>
										)
									},

									{
										path: 'dashboard',
										element: (
											<PrivateRoute>
												<Dashboard />
											</PrivateRoute>
										)
									},

									{
										path: 'wishlist',
										element: (
											<PrivateRoute>
												<Wishlist />
											</PrivateRoute>
										)
									}
								]
							},
						],
					},

					// Setting Group
					{
						path: '',
						element: <Outlet />,
						children: [
							{
								path: '/contact',
								element: <ContactUs />,
							},

							{
								path: '/about-us',
								element: <AboutUs />
							},

							{
								path: '/faq',
								element: <FAQ />,
							},

							{
								path: '/privacy-policy',
								element: <PrivacyPolicy />,
							},

							{
								path: '/terms-and-conditions',
								element: <TermsAndConditions />,
							},

							{
								path: '/support',
								element: <Support />,
							},

							{
								path: '/refund-policy',
								element: <RefundPolicy />
							},

							{
								path: '/delivery-policy',
								element: <DeliveryPolicy />
							}
						]
					},

					// Authentication part
					{
						path: '',
						element: <Outlet />,
						children: [
							{
								path: '/register',
								element: <Register />
							},

							{
								path: '/login',
								element: <Login />
							},

							{
								path: '/verify-otp',
								element: <VerifyOTP />
							},

							{
								path: '/forgot-password',
								element: <ForgotPassword />
							},

							{
								path: '/change-password',
								element: <ChangePassword />
							}
						]
					}
				]
			},
		],
	},
])

export default Router
