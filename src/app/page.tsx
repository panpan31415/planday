"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

type Image = {
  title: string;
  description: string;
  imagePath: string;
}

const images: Image[] = [
  {
    title: 'Level up',
    description: 'Level up',
    imagePath:
      'https://images.unsplash.com/photo-1568659358810-bdbdb4decb5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmVvbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Game on',
    description: 'Game on',
    imagePath:
      'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmVvbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Hi',
    description: 'Hi',
    imagePath:
      'https://images.unsplash.com/photo-1495069781661-dfeacdef0531?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lb258ZW58MHx8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Do something great',
    description: 'Do something great',
    imagePath:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lb258ZW58MHx8MHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Stay wired',
    description: 'Stay wired',
    imagePath:
      'https://images.unsplash.com/photo-1563240381-5ccf7690ca08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fG5lb258ZW58MHx8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Do what you love',
    description: 'Do what you love',
    imagePath:
      'https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fG5lb258ZW58MHx8MHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Ready or not',
    description: 'Ready or not',
    imagePath:
      'https://images.unsplash.com/photo-1581300740943-cfa5f847db2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fG5lb258ZW58MHx8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Pizza',
    description: 'Pizza',
    imagePath:
      'https://images.unsplash.com/photo-1542587222-f9172e5eba29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODR8fG5lb258ZW58MHx8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Hello',
    description: 'Hello',
    imagePath:
      'https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA0fHxuZW9ufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Good times',
    description: 'Good times',
    imagePath:
      'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxuZW9ufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Make beer, not war',
    description: 'Make beer, not war',
    imagePath:
      'https://images.unsplash.com/photo-1577032229840-33197764440d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc5fHxuZW9ufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: "You're doing great",
    description: "You're doing great",
    imagePath:
      'https://images.unsplash.com/photo-1572633424705-d813d2fb5cb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2811&amp;q=80'
  },
  {
    title: 'Ready or not',
    description: 'Ready or not',
    imagePath:
      'https://images.unsplash.com/photo-1581300740943-cfa5f847db2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80'
  },
  {
    title: 'Steak &amp; wine',
    description: 'Steak &amp; wine',
    imagePath:
      'https://images.unsplash.com/photo-1545464333-9cbd1f263aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80'
  },
  {
    title: 'We belong here',
    description: 'We belong here',
    imagePath:
      'https://images.unsplash.com/photo-1587183233478-0acdba5b184a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80'
  },
  {
    title: 'Burger',
    description: 'Burger',
    imagePath:
      'https://images.unsplash.com/photo-1563191799-2c7e8c185bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80'
  },
  {
    title: 'Yeah',
    description: 'Yeah',
    imagePath:
      'https://images.unsplash.com/photo-1606595885348-ba270cb254d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80'
  },
  {
    title: 'Avengers',
    description: 'Avengers',
    imagePath:
      'https://images.unsplash.com/photo-1560932684-5e552e2894e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxuZW9ufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  },
  {
    title: 'Yes',
    description: 'Yes',
    imagePath:
      'https://images.unsplash.com/photo-1584844308364-9e43f2cfaa6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80'
  },
  {
    title: 'We believe',
    description: 'We believe',
    imagePath:
      'https://images.unsplash.com/photo-1582478192200-b4bd08b40096?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1790&amp;q=80'
  }
]

type GetImagesParams = {
  page?: number, numberPerPage?: number
}

type Reponse = {
  data: Image[],
  maxPage: number
}

// I want to simulate the http request so I returned promise here.
function getImages({
  page, numberPerPage
}: GetImagesParams): Promise<Reponse> {

  let data = images;
  let maxPage = 1;
  if (page && numberPerPage) {
    data = images.slice((page - 1) * numberPerPage, page * numberPerPage)
    maxPage = Math.ceil(images.length / numberPerPage)
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data, maxPage,
      })
    }, 1000);
  })
}

function searchImage(searchText: string): Promise<{ images: Image[] }> {
  let searchImages = images;
  if (searchText) {
    searchImages = images.filter((image) => {
      return image.title.toLowerCase().includes(searchText.toLowerCase()) || image.description.toLowerCase().includes(searchText.toLowerCase())
    })
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        images: searchImages,
      })
    }, 1000);
  })
}


export default function Home() {
  const [numberPerPage, setNumberPerPage] = useState(5)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [currentImages, setCurrentIamegs] = useState<Image[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setPage(1)
  }, [numberPerPage])

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getImages({
          page, numberPerPage: numberPerPage
        })
        setCurrentIamegs(() => response.data)
        setMaxPage(() => response.maxPage)
      } catch (error) {
        // handle error, such as: Sentry.captureException(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [page, numberPerPage])

  const search = async () => {
    try {
      setIsLoading(true)
      const { images } = await searchImage(searchText)
      console.log("hello", images);
      setCurrentIamegs(() => images)
      setIsLoading(false)
    } catch (error) {
      // handdle error
    }
  }

  return (
    <main className={styles.main}>
      <div style={{
        width: "100%",
        height: "100px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          border: "1px solid black"
        }}>
          <input
            role="text"
            type="text"
            style={{
              borderWidth: 0,
              width: "200px",
              height: "20px",
              outline: "none",
            }}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button style={{
            border: "none",
            cursor: "pointer",
            height: "20px",
          }} onClick={search}>Search</button>
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "300px 300px",
          gap: "30px",

        }}
      >
        {isLoading ? "loading..." : (currentImages.length > 0 ? currentImages.map((image, index) => {
          return <div key={image.title + index} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#ccc", rowGap: "5px", }}>
            <img src={image.imagePath} alt={image.title} style={{
              objectFit: "cover",
              width: "300px",
              height: "200px"
            }} />
            <p style={{
              padding: "5px"
            }}>title: {image.title}</p>
            <p style={{
              padding: "5px"
            }}>{image.description}</p>
          </div>
        }) : "No Result Found with " + searchText)}
      </div>

      {/* pagination controlls */}
      {searchText ? null : <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderTop: "1px solid #ccc",
        padding: "0 50px"
      }}>
        <div>
          <input style={{
            width: "40px",
            marginRight: "5px",
            textAlign: "center"
          }}
            value={numberPerPage}
            type="number"
            onChange={(event) => { setNumberPerPage(parseInt(event.target.value)) }}>
          </input>images/page
        </div>

        <div style={{
          display: "flex",
          gap: "5px",
          marginTop: "5px"
        }}>
          {
            Array.from({
              length: maxPage
            }).map((_, index) => {
              return <button
                style={{
                  padding: "5px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  backgroundColor: index + 1 === page ? "black" : "#ccc",
                  color: index + 1 === page ? "#ccc" : "black"
                }}
                key={index}
                onClick={() => setPage(() => index + 1)}
              >{index + 1}</button>
            })
          }
        </div>
      </div>}
    </main >
  );
}


