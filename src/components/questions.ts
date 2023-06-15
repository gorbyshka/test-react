
export const questions = [

    {
        question: 'От какого класса идет наследование всех компонентов?',

        answers: [

            {
                option: 'ComponentReact',
                isCorrect: false
            },

            {
                option: 'ReactComponent',
                isCorrect: false
            },

            {
                option: 'ReactJS.Component',
                isCorrect: false
            },

            {
                option: 'Component',
                isCorrect: false
            },

            {
                option: 'React.Component',
                isCorrect: true
            },

        ],

    },

    {
        question: 'Где правильно создан компонент?',

        answers: [

            {
                option: 'class App extends React.Component {}',
                isCorrect: true
            },

            {
                option: 'class App extends Component {}',
                isCorrect: false
            },

            {
                option: 'class App {}',
                isCorrect: false
            },

            {
                option: 'class App extends React.Component ({})',
                isCorrect: false
            },

            {
                option: 'React.Component {}',
                isCorrect: false
            },

        ],

    },

    {
        question: 'React JS – это...',

        answers: [

            {
                option: 'MVC-фреймворк',
                isCorrect: false
            },

            {
                option: 'JavaScript библиотека',
                isCorrect: true
            },

            {
                option: 'фреймворк',
                isCorrect: false
            },

            {
                option: 'Back-end платформа',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Чем свойства отличаются от состояний?',

        answers: [

            {
                option: 'Свойства можно изменять, состояния нельзя',
                isCorrect: false
            },

            {
                option: 'Свойства для работы со значениями, состояния для работы с функциями',
                isCorrect: false
            },

            {
                option: 'Состояния можно изменять, свойства нельзя',
                isCorrect: true
            },

            {
                option: 'Состояния для работы со значениями, свойства для работы с функциями',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Как обратится к свойству weight? <Test weight="203" height="182" /> ',

        answers: [

            {
                option: '{props.weight}',
                isCorrect: false
            },

            {
                option: '{this.weight}',
                isCorrect: false
            },

            {
                option: '{this.prop.weight}',
                isCorrect: false
            },

            {
                option: '{this.props.weight}',
                isCorrect: true
            },

            {
                option: '{prop.weight}',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Где правильно передена функция в качестве свойства? ',

        answers: [

            {
                option: 'argument={this.someFunction ()}',
                isCorrect: false
            },

            {
                option: 'argument=(this.someFunction)',
                isCorrect: false
            },

            {
                option: 'argument={this.someFunction {}}',
                isCorrect: false
            },

            {
                option: 'argument={someFunction}',
                isCorrect: false
            },

            {
                option: 'argument={this.someFunction}',
                isCorrect: true
            },

        ],

    },

    {
        question: 'Какая компания разработала React JS?',

        answers: [

            {
                option: 'Twitter',
                isCorrect: false
            },

            {
                option: 'Facebook',
                isCorrect: true
            },

            {
                option: 'GitHub',
                isCorrect: false
            },

            {
                option: 'Google',
                isCorrect: false
            },

            {
                option: 'Amazon',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Можно ли писать не используя Babel?',

        answers: [

            {
                option: 'Да, можно',
                isCorrect: true
            },

            {
                option: 'Нет, нельзя',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Как много компонентов может быть на сайте?',

        answers: [

            {
                option: 'Не более 10',
                isCorrect: false
            },

            {
                option: 'Не более 100',
                isCorrect: false
            },

            {
                option: 'Неограниченное количество',
                isCorrect: true
            },

            {
                option: 'Не более 50',
                isCorrect: false
            },

            {
                option: 'Не более 300',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Какой метод отвечает за вывод информации через React JS компонент?',

        answers: [

            {
                option: 'ReactDOM',
                isCorrect: false
            },

            {
                option: 'react',
                isCorrect: false
            },

            {
                option: 'console',
                isCorrect: false
            },

            {
                option: 'print',
                isCorrect: false
            },

            {
                option: 'render',
                isCorrect: true
            },

        ],

    },

    {
        question: 'Куда можно встроить готовый код из метода render()?',

        answers: [

            {
                option: 'Только в div',
                isCorrect: false
            },

            {
                option: 'В любой тегt',
                isCorrect: true
            },

            {
                option: 'Только в тег, у которого есть id',
                isCorrect: false
            },

            {
                option: 'В div или же в span',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте?',

        answers: [

            {
                option: 'Не более 3',
                isCorrect: false
            },

            {
                option: 'Не более 5',
                isCorrect: false
            },

            {
                option: 'Не более 10',
                isCorrect: false
            },

            {
                option: 'Всегда 1',
                isCorrect: true
            },

            {
                option: 'Неограниченное количество',
                isCorrect: false
            },

        ],

    },

    {
        question: 'Где правильно выведен компонент через рендер??',

        answers: [

            {
                option: '<Test />',
                isCorrect: true
            },

            {
                option: '<Test>',
                isCorrect: false
            },

            {
                option: '<Test >',
                isCorrect: false
            },

            {
                option: '</Test>',
                isCorrect: false
            },

            {
                option: '</ Test>',
                isCorrect: false
            },

        ],

    },

];
