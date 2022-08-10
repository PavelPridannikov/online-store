import type {NextPage} from 'next'
import {
    AboutUsSC, ButtonCatalogSC,
    ButtonsFirstSectionSC,
    CatalogSC, CatalogTitleSC,
    FirstSectionImageSC,
    FirstSectionLeftSC,
    FirstSectionSC, FormButtonSC, FormContainerSC, FormContantSC, FormDescriptionSC, InputFormSC
} from "./UI";
import {CheckboxUI} from "../UI/CheckboxUI/CheckboxUI";
import Products from "../components/Products/Products";
import React from "react";
import {router} from "next/client";
import {useRouter} from "next/router";
import Link from "next/link";



const Home: NextPage = () => {
  return (
    <>
      <FirstSectionSC>
          <FirstSectionImageSC>
              <img src="/image/image1.png"/>
          </FirstSectionImageSC>
          <FirstSectionLeftSC>
              <h1>
                  Интернет магазин уличного стиля
              </h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam aperiam, aspernatur assumenda debitis dolorem ducimus eaque, earum eligendi enim est ex exercitationem facere iste iure laboriosam libero molestiae nesciunt nihil nobis possimus quas qui quidem rerum similique tempora ullam vel veniam voluptatibus. A amet asperiores atque blanditiis commodi culpa dolores eligendi exercitationem fugiat hic in incidunt inventore ipsa magnam nesciunt officia, possimus quasi quis ratione, suscipit veritatis voluptatibus!
              </p>
              <Link href="/catalog">
                  <ButtonsFirstSectionSC>
                      перейти к коллекции
                  </ButtonsFirstSectionSC>
              </Link>

          </FirstSectionLeftSC>
      </FirstSectionSC>
        <AboutUsSC>
            <img/>
            <h2>То что живет в каждом из нас</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </AboutUsSC>
      <CatalogSC>
          <CatalogTitleSC>
              <h2>Каталог</h2>
          </CatalogTitleSC>
              <Products limit={3}/>
          <Link href="/catalog">
              <ButtonCatalogSC>
                  перейти в каталог
              </ButtonCatalogSC>
          </Link>
      </CatalogSC>
      <FormContainerSC>
              <h2>
                  Поможем подобрать образ
              </h2>
          <FormContantSC>
              <FormDescriptionSC>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </FormDescriptionSC>
              <form action="#" method="post">
                  <h3>Заполните форму</h3>
                  <InputFormSC name="name" type="text" placeholder="Введите имя и фамилию"/>
                  <InputFormSC name="email" type="text" placeholder="Введите почту"/>
                  <CheckboxUI>
                      <label>
                          <input name="Летний образ" type="checkbox"/>
                          <span></span>
                          Летний образ
                      </label>
                  </CheckboxUI>
                  <CheckboxUI>
                      <label>
                          <input name="Вечерний образ" type="checkbox"/>
                          <span></span>
                          Вечерний образ
                      </label>
                  </CheckboxUI>
                  <CheckboxUI>
                      <label>
                          <input name="Деловой образ" type="checkbox"/>
                          <span></span>
                          Деловой образ
                      </label>
                  </CheckboxUI>
                  <p>Комментарий</p>
                  <textarea name="text"></textarea>
                  <FormButtonSC>Отправить</FormButtonSC>
              </form>
          </FormContantSC>
      </FormContainerSC>
    </>
  )
}

export default Home;