# Базовое производство подразделения

## Определение

Каждой отрасли требуются разные входные материалы. У каждого необходимого материала есть собственный коэффициент. Он не совпадает с коэффициентом boost material: это разные величины. Например:

- Agriculture: { Water: 0.5, Chemicals: 0.2 }
- Chemical: { Plants: 1, Water: 0.5 }
- Tobacco: { Plants: 1 }

У каждого подразделения есть величина, которую я называю «базовым производством подразделения». Она показывает производственную способность подразделения. Будем называть её `RawProduction`. Она используется для:

- расчёта необходимого количества входных материалов: это значение умножается на коэффициент входного материала;
- расчёта количества материалов/продуктов, которое подразделение может произвести: результат умножается на `ProducibleFrac`. `ProducibleFrac` начинается со значения 1 и уменьшается, если входных материалов недостаточно.

Например, если у Agriculture `RawProduction` равно 1000, потребуется 500 единиц Water и 200 единиц Chemicals. Из этих входных материалов можно произвести 1000 единиц Plants и 1000 единиц Food.

### Формула

`RawProduction` — произведение 4 множителей:

- Множитель офиса:
  - Производство сотрудников на 3 должностях (Operations, Engineer, Management) и их сумма:
    - `OperationsProd = office.employeeProductionByJob.Operations`
    - `EngineerProd = office.employeeProductionByJob.Engineer`
    - `ManagementProd = office.employeeProductionByJob.Management`
    - $TotalEmployeesProd = OperationsProd + EngineerProd + ManagementProd$
  - Фактор управления:
    $$ManagementFactor = 1 + \frac{ManagementProd}{1.2\ast TotalEmployeesProd}$$
  - Множитель производства сотрудников:
    $$EmployeeProductionMultiplier = \left( (OperationsProd)^{0.4} + (EngineerProd)^{0.3} \right)\ast ManagementFactor$$
  - Балансирующий множитель:
    $$BalancingMultiplier = 0.05$$
  - Если результат — материал:
    $$OfficeMultiplier = BalancingMultiplier\ast EmployeeProductionMultiplier$$
  - Если результат — продукт:
    $$OfficeMultiplier = 0.5\ast BalancingMultiplier\ast EmployeeProductionMultiplier$$
- Множитель производства подразделения: см. предыдущий [раздел](./boost-material.md).
- Множитель улучшений: множитель от [Smart Factories](./unlocks-upgrade-research.md).
- Множитель исследований: множитель от [исследований](./unlocks-upgrade-research.md).
