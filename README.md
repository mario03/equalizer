equalizer
=========
В исходном коде допущен ряд ошибок: скрипты подключаются в head (блокируется 
отрисовка интерфейса, на время загрузки и анализа скрипта), не кэшируются 
результаты работы селекторов, основная ошибка находится в методе 
"run_equalizer",который вызывает себя в качестве callback функции, после 
анимации столбика,в результате чего по истечении определенного времени 
проиходит переполнение стека.Одним из решений является изменение метода,
таким образом,  чтобы он работал в отдельности с каждым столбиком, 
исключая необходимость выборки столбиков по селектору каждый раз.
