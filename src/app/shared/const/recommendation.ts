export enum MAN_PHRASE {
  THINK = 'Да ты дрыщ товарищ!',
  NORMAL = 'Красавчик',
  FIRST_OVERWEIGHT = 'Жирок присутствует, но ничего страшного!',
  SECOND_OVERWEIGHT = 'Бегом в спортзал свинтус!',
  THIRD_OVERWEIGHT = 'Вызвать погрузчик чтобы выйти на прогулку?'
}

export enum WOMAN_PHRASE {
  THINK = 'Покушай бедняшка!',
  NORMAL = 'Стройняшка',
  FIRST_OVERWEIGHT = 'Ты не толстая, ты Бейонсе!',
  SECOND_OVERWEIGHT = 'Хватит жрать после 6!',
  THIRD_OVERWEIGHT = 'Не верь бабушке, ты не худая!'
}

export class RecommendationPhrase {
  static  BEATIFUL = {recomend: 'Устройся моделью, чудо, я обязательно подпишусь на тебя в Instagram', title: 'Карта Фотостудий в студию'};
  static  Proper_Nutrition = {recomend : 'Начни питаться правильно', title: 'Ближайшие  Кафешки'};
  static SPORT = {recomend: 'Спортзал придумали не просто так, я покажу тебе ближайшие', title: 'Посмотреть на карте'};
  static DOINGS = {recomend: 'Еда не единственное удовольствие, вот пара события для тебя!', title: 'Карта с событиями'};
}
