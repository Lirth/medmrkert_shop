import title_page from "../../components/elements/titles/title_page.vue";
import breadcrumbs from "../../components/elements/breadcrumbs/breadcrumbs.vue";

export default {
    name: "contact",
    components: {
        title_page,
        breadcrumbs,
    },
    mounted() {
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                    center: [45.049679, 38.967704],
                    zoom: 16
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                // Создаем геообъект с типом геометрии "Точка".
                myGeoObject = new ymaps.GeoObject({
                    // Описание геометрии.
                    geometry: {
                        type: "Point",
                        coordinates: [45.049322, 38.976822]
                    },
                    // Свойства.
                    properties: {
                        // Контент метки.
                        iconContent: 'мед-маркет.рф',
                        hintContent: 'Центральный вход'
                    }
                }, {
                    // Опции.
                    // Иконка метки будет растягиваться под размер ее содержимого.
                    preset: 'islands#blackStretchyIcon',
                    // Метку можно перемещать.
                    draggable: false
                }),
                myPieChart = new ymaps.Placemark([
                    45.049322, 38.976822
                ], {
                    // Данные для построения диаграммы.
                    data: [
                        {weight: 8, color: '#0E4779'},
                        {weight: 6, color: '#1E98FF'},
                        {weight: 4, color: '#82CDFF'}
                    ],
                    iconCaption: "Диаграмма"
                }, {
                    // Зададим произвольный макет метки.
                    iconLayout: 'default#pieChart',
                    // Радиус диаграммы в пикселях.
                    iconPieChartRadius: 30,
                    // Радиус центральной части макета.
                    iconPieChartCoreRadius: 10,
                    // Стиль заливки центральной части.
                    iconPieChartCoreFillStyle: '#ffffff',
                    // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
                    iconPieChartStrokeStyle: '#ffffff',
                    // Ширина линий-разделителей секторов и внешней обводки диаграммы.
                    iconPieChartStrokeWidth: 3,
                    // Максимальная ширина подписи метки.
                    iconPieChartCaptionMaxWidth: 200
                });

            myMap.geoObjects.add(myGeoObject)
        }

    }
}
