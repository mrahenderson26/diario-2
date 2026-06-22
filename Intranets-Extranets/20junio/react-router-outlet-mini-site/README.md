# React Router Outlet Mini Site

This is a small learner-friendly React Router example showing:

- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `Layout` components
- `<Outlet />`
- nested routes
- index routes
- a catch-all `404` route

## How to run it

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open the local URL that Vite gives you, usually:

```txt
http://localhost:5173
```

## The important idea

`App.jsx` defines the route structure:

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="services" element={<ServicesLayout />}>
    <Route index element={<ServicesIndex />} />
    <Route path="web-development" element={<WebDev />} />
    <Route path="translation" element={<Translation />} />
  </Route>
</Route>
```

`Layout.jsx` decides where the child page appears:

```jsx
<Outlet />
```

So:

```txt
/          -> Layout + Home inside Layout's Outlet
/about     -> Layout + About inside Layout's Outlet
/contact   -> Layout + Contact inside Layout's Outlet
/services  -> Layout + ServicesLayout inside Layout's Outlet
```

Then `ServicesLayout.jsx` has another `<Outlet />`, so it can render its own child pages:

```txt
/services                 -> ServicesIndex inside ServicesLayout's Outlet
/services/web-development -> WebDev inside ServicesLayout's Outlet
/services/translation     -> Translation inside ServicesLayout's Outlet
```
