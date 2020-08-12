const settings = {
  "name": "theme",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Bios House - The Universe at it's finest",
      "description": "Bios House - The Universe at it's finest"
    }
  },
  "packages": [
    {
      "name": "@frontity/bios",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://test.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
