import { QuestionCard } from "@/entity/question";
import { Card } from "@/shared/ui/card";
import styles from "./styles/answers.module.css";

export default function Answers() {
  return (
    <article className={styles.Answers}>
      <Card additionalClassName={styles.title}>Вопросы-ответы</Card>
      <QuestionCard
        question="Что такое Билетопоиск?"
        answer="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
      />
      <QuestionCard
        question="Какой компании принадлежит Билетопоиск?"
        answer="Холдинг с названием Кинобилет Групп. Эта компания специализируется на продаже билетов на киносеансы и предоставляет свой сервис Билетопоиск для удобного поиска и покупки билетов в различных кинотеатрах."
      />
      <QuestionCard
        question="Как купить билет на Билетопоиск?"
        answer="Для покупки билетов на фильм в Билетопоиске необходимо зайти на официальный сайт компании, выбрать нужный фильм и время сеанса, указать количество билетов, а затем оплатить приобретение билетов с помощью доступных способов оплаты. После успешной оплаты, билеты будут высланы на электронную почту, указанную при оформлении заказа, или их можно будет распечатать самостоятельно."
      />
      <QuestionCard question="Как оставить отзыв на Билетопоиск?" answer="Это очен просто!" />
    </article>
  );
}
