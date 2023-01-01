from fastapi import FastAPI
from fastapi.responses import RedirectResponse, Response, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn, requests
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(HTTPSRedirectMiddleware)

@app.get("/") # uses path param
async def ReturnWebPageFunc():
    data = open('Page.html').read()
    return Response(content=data, media_type="text/html")

@app.get("/SiteImages/{image}") # uses path param
async def ReturnImageFunc(image):
    return FileResponse("SiteImages/"+image)

@app.get("/CSS/CssFile1.css") # uses path param
async def ReturnCSSFileFunc():
    return FileResponse("CSS/CssFile1.css")

@app.get("/JS/JSfile1.js") # uses path param
async def ReturnJSFileFunc():
    return FileResponse("JS/JSfile1.js")

if __name__ == "__main__":
    uvicorn.run(app, port=453, host='0.0.0.0', ssl_keyfile="/etc/letsencrypt/live/nbolade.co.uk/privkey.pem", ssl_certfile="/etc/letsencrypt/live/nbolade.co.uk/fullchain.pem")
