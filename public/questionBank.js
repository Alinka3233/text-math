const questionBank = {
  "函数与极限": [
    {
      id: "func-limit-001",
      topic: "函数与极限",
      question: "求函数 $f(x) = \\sqrt{x^2 - 4}$ 的定义域",
      answer: "$(-\\infty, -2] \\cup [2, +\\infty)$",
      solution: "【知识点】函数定义域的求法\n\n【详细步骤】\n1. 确定函数类型：这是一个偶次根式函数\n2. 偶次根式的要求：被开方数必须大于等于 $0$\n3. 建立不等式：$x^2 - 4 \\ge 0$\n4. 解不等式：\n   - 因式分解：$(x - 2)(x + 2) \\ge 0$\n   - 零点：$x = -2$ 和 $x = 2$\n   - 符号分析：\n     - 当 $x < -2$ 时，$(x-2)(x+2) > 0$\n     - 当 $-2 < x < 2$ 时，$(x-2)(x+2) < 0$\n     - 当 $x > 2$ 时，$(x-2)(x+2) > 0$\n5. 结论：$x \\le -2$ 或 $x \\ge 2$\n\n【常见错误】\n- 错误：只考虑 $x \\ge 2$，遗漏 $x \\le -2$ 的情况\n- 错误：写成开区间 $(-\\infty,-2) \\cup (2,+\\infty)$，忽略等号\n- 原因：忘记偶次根式可以等于 $0$"
    },
    {
      id: "func-limit-002",
      topic: "函数与极限",
      question: "判断函数 $f(x) = x^3 - 3x$ 的奇偶性",
      answer: "奇函数",
      solution: "【知识点】函数奇偶性的定义与判断\n\n【详细步骤】\n1. 奇偶性定义：\n   - 偶函数：$f(-x) = f(x)$\n   - 奇函数：$f(-x) = -f(x)$\n2. 计算 $f(-x)$：\n   $f(-x) = (-x)^3 - 3(-x) = -x^3 + 3x$\n3. 整理：\n   $f(-x) = -(x^3 - 3x) = -f(x)$\n4. 结论：满足奇函数定义\n\n【常见错误】\n- 错误：计算 $(-x)^3$ 时错误地得到 $x^3$\n- 错误：混淆奇偶性的判断条件\n- 技巧：多项式函数中，只有奇次幂的是奇函数，只有偶次幂的是偶函数"
    },
    {
      id: "func-limit-003",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x}$",
      answer: "$1$",
      solution: "【知识点】重要极限之一\n\n【详细步骤】\n1. 这是第一个重要极限，标准形式为：$\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$\n2. 几何解释（单位圆）：\n   - 设圆心角为 $x$（弧度）\n   - 三角形面积 $\\le$ 扇形面积 $\\le$ 大三角形面积\n   - $\\frac{1}{2}\\sin x \\le \\frac{1}{2}x \\le \\frac{1}{2}\\tan x$\n   - 两边除以 $\\frac{1}{2}\\sin x$ 得：$1 \\le \\frac{x}{\\sin x} \\le \\frac{1}{\\cos x}$\n   - 取倒数：$\\cos x \\le \\frac{\\sin x}{x} \\le 1$\n   - 当 $x \\to 0$ 时，$\\cos x \\to 1$，由夹逼准则得极限为 $1$\n\n【常见错误】\n- 错误：不注意 $x$ 必须趋近于 $0$ 时此极限才成立\n- 错误：$\\lim\\limits_{x \\to \\infty} \\frac{\\sin x}{x}$ 误用此公式，实际上这个极限是 $0$（有界量乘无穷小）\n- 注意：$x$ 必须以弧度为单位"
    },
    {
      id: "func-limit-004",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$",
      answer: "$e$",
      solution: "【知识点】重要极限之二\n\n【详细步骤】\n1. 这是第二个重要极限，标准形式为：$\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$\n2. 等价形式：\n   - $\\lim\\limits_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$ （$n$为正整数）\n   - $\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$\n3. 数值验证：\n   - $x=10$: $1.1^{10} \\approx 2.5937$\n   - $x=100$: $1.01^{100} \\approx 2.7048$\n   - $x=1000$: $1.001^{1000} \\approx 2.7169$\n   - 趋近于 $e \\approx 2.71828...$\n\n【常见错误】\n- 错误：写成 $\\lim\\limits_{x \\to 0} \\left(1 + \\frac{1}{x}\\right)^x = e$，这是错误的\n- 错误：混淆底数和指数的变化趋势\n- 记忆技巧：底数趋近于 $1$，指数趋近于无穷，结果为 $e$"
    },
    {
      id: "func-limit-005",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{x^2}$",
      answer: "$\\frac{1}{2}$",
      solution: "【知识点】等价无穷小替换、三角恒等式\n\n【详细步骤】\n方法一：等价无穷小替换\n1. 常用等价无穷小：当 $x \\to 0$ 时，$1 - \\cos x \\sim \\frac{x^2}{2}$\n2. 替换：$\\frac{1 - \\cos x}{x^2} \\sim \\frac{\\frac{x^2}{2}}{x^2} = \\frac{1}{2}$\n\n方法二：三角恒等式\n1. 利用恒等式：$1 - \\cos x = 2\\sin^2(\\frac{x}{2})$\n2. 原式 $= \\lim\\limits_{x \\to 0} \\frac{2\\sin^2(\\frac{x}{2})}{x^2}$\n3. $= \\lim\\limits_{x \\to 0} \\frac{2\\sin^2(\\frac{x}{2})}{4(\\frac{x}{2})^2}$\n4. $= \\frac{1}{2} \\lim\\limits_{x \\to 0} \\left[\\frac{\\sin(\\frac{x}{2})}{\\frac{x}{2}}\\right]^2$\n5. $= \\frac{1}{2} \\times 1^2 = \\frac{1}{2}$\n\n【常见错误】\n- 错误：直接代入 $x=0$ 得到 $0/0$，以为极限不存在\n- 错误：记错等价无穷小，写成 $1 - \\cos x \\sim x$\n- 注意：等价无穷小只能在乘除运算中替换，加减运算要谨慎"
    },
    {
      id: "func-limit-006",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to 1} \\frac{x^2 - 1}{x - 1}$",
      answer: "$2$",
      solution: "【知识点】0/0型极限、因式分解\n\n【详细步骤】\n1. 观察：$x \\to 1$ 时，分子分母都 $\\to 0$，是 $0/0$ 型不定式\n2. 不能直接代入 $x=1$，因为分母为 $0$\n3. 因式分解分子：$x^2 - 1 = (x - 1)(x + 1)$\n4. 约分化简：$\\frac{(x - 1)(x + 1)}{x - 1} = x + 1$ （$x \\neq 1$）\n5. 代入 $x=1$：$1 + 1 = 2$\n\n【几何意义】\n这是求函数 $y = \\frac{x^2 - 1}{x - 1}$ 在 $x=1$ 处的极限，虽然函数在 $x=1$ 无定义，但极限存在，等于 $2$\n\n【常见错误】\n- 错误：直接代入 $x=1$，得到 $0/0$，认为极限不存在\n- 错误：忘记约分化简\n- 重要概念：函数在某点的极限与该点是否有定义无关"
    },
    {
      id: "func-limit-007",
      topic: "函数与极限",
      question: "求函数 $f(x) = \\frac{1}{x-2}$ 的间断点",
      answer: "$x=2$",
      solution: "【知识点】函数的连续性与间断点\n\n【详细步骤】\n1. 函数定义域：$x \\neq 2$\n2. 在 $x=2$ 处：\n   - 函数无定义\n   - 左极限：$\\lim\\limits_{x \\to 2^-} \\frac{1}{x-2} = -\\infty$\n   - 右极限：$\\lim\\limits_{x \\to 2^+} \\frac{1}{x-2} = +\\infty$\n3. 间断点类型：无穷间断点（属于第二类间断点）\n\n【间断点分类】\n- 第一类间断点：左右极限都存在\n  - 可去间断点：左右极限相等\n  - 跳跃间断点：左右极限不相等\n- 第二类间断点：左右极限至少有一个不存在（如无穷、振荡）\n\n【常见错误】\n- 错误：认为所有无定义的点都是间断点（实际上只考虑定义域的聚点）\n- 错误：间断点类型判断错误"
    },
    {
      id: "func-limit-008",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x}$",
      answer: "$1$",
      solution: "【知识点】重要极限、三角恒等式\n\n【详细步骤】\n1. 将 $\\tan x$ 表示为 $\\frac{\\sin x}{\\cos x}$：\n   $\\frac{\\tan x}{x} = \\frac{\\frac{\\sin x}{\\cos x}}{x} = \\frac{\\sin x}{x} \\times \\frac{1}{\\cos x}$\n2. 利用极限的乘积法则：\n   $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} \\times \\lim\\limits_{x \\to 0} \\frac{1}{\\cos x}$\n3. 计算：\n   - 第一个极限：$\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$（重要极限）\n   - 第二个极限：$\\lim\\limits_{x \\to 0} \\frac{1}{\\cos x} = \\frac{1}{\\cos 0} = 1$\n4. 结果：$1 \\times 1 = 1$\n\n【等价无穷小】\n当 $x \\to 0$ 时，$\\tan x \\sim x$，因此也可以用等价无穷小替换直接得到结果\n\n【常见错误】\n- 错误：$\\frac{\\tan x}{x} = \\tan(\\frac{x}{x}) = \\tan 1$，这是完全错误的\n- 错误：忘记 $\\cos x$ 在 $x \\to 0$ 时的极限是 $1$"
    },
    {
      id: "func-limit-009",
      topic: "函数与极限",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x}$",
      answer: "$1$",
      solution: "【知识点】重要极限、变量替换、等价无穷小\n\n【详细步骤】\n方法一：变量替换\n1. 令 $t = e^x - 1$，则 $e^x = t + 1$，$x = \\ln(1 + t)$\n2. 当 $x \\to 0$ 时，$t \\to 0$\n3. 原式变为：$\\lim\\limits_{t \\to 0} \\frac{t}{\\ln(1 + t)}$\n4. $= \\lim\\limits_{t \\to 0} \\frac{1}{\\ln(1 + t)^{\\frac{1}{t}}}$\n5. $= \\frac{1}{\\ln e} = \\frac{1}{1} = 1$\n\n方法二：等价无穷小\n1. 当 $x \\to 0$ 时，$e^x - 1 \\sim x$\n2. 因此极限为 $1$\n\n【常见错误】\n- 错误：代入 $x=0$ 得到 $0/0$，认为极限不存在\n- 错误：变量替换时忘记改变极限的趋近值\n- 记忆：$e^x - 1 \\sim x$，$\\ln(1+x) \\sim x$，都是 $x \\to 0$ 时的等价无穷小"
    },
    {
      id: "func-limit-010",
      topic: "函数与极限",
      question: "求函数 $f(x) = \\ln(x + 1)$ 的定义域",
      answer: "$(-1, +\\infty)$",
      solution: "【知识点】对数函数的定义域\n\n【详细步骤】\n1. 对数函数 $y = \\ln u$ 的定义域要求：$u > 0$\n2. 本题中 $u = x + 1$\n3. 建立不等式：$x + 1 > 0$\n4. 解不等式：$x > -1$\n5. 定义域表示：$(-1, +\\infty)$\n\n【相关知识】\n- 自然对数 $\\ln x$ 的定义域是 $(0, +\\infty)$\n- 常用对数 $\\log_{10} x$ 的定义域也是 $(0, +\\infty)$\n- 一般对数 $\\log_a x$（$a>0,a\\neq 1$）的定义域都是 $(0, +\\infty)$\n\n【常见错误】\n- 错误：写成 $x \\ge -1$，包括 $x=-1$，此时 $\\ln 0$ 无意义\n- 错误：写成 $x > 0$，漏掉 $(-1,0]$ 区间\n- 记忆：对数的真数必须严格大于 $0$"
    }
  ],
  "导数": [
    {
      id: "deriv-001",
      topic: "导数",
      question: "求 $f(x) = x^3 - 2x^2 + 3x - 1$ 的导数",
      answer: "$f'(x) = 3x^2 - 4x + 3$",
      solution: "【知识点】幂函数求导公式、导数的四则运算\n\n【详细步骤】\n1. 基本求导公式：$(x^n)' = nx^{n-1}$\n2. 逐项求导：\n   - $(x^3)' = 3x^2$\n   - $(-2x^2)' = -2 \\times 2x = -4x$\n   - $(3x)' = 3 \\times 1 = 3$\n   - $(-1)' = 0$（常数的导数为 $0$）\n3. 组合结果：$f'(x) = 3x^2 - 4x + 3$\n\n【导数的意义】\n- 几何意义：曲线在某点的切线斜率\n- 物理意义：瞬时变化率\n\n【常见错误】\n- 错误：忘记常数的导数是 $0$\n- 错误：指数计算错误，如 $(x^3)' = 2x^2$\n- 错误：符号错误，如 $(-2x^2)' = 4x$"
    },
    {
      id: "deriv-002",
      topic: "导数",
      question: "求 $f(x) = \\sin x + \\cos x$ 的导数",
      answer: "$f'(x) = \\cos x - \\sin x$",
      solution: "【知识点】三角函数的导数公式\n\n【详细步骤】\n1. 基本导数公式：\n   - $(\\sin x)' = \\cos x$\n   - $(\\cos x)' = -\\sin x$\n2. 利用和的导数法则：$(u + v)' = u' + v'$\n3. 逐项求导：\n   $(\\sin x + \\cos x)' = (\\sin x)' + (\\cos x)' = \\cos x + (-\\sin x) = \\cos x - \\sin x$\n\n【记忆技巧】\n- 正弦变余弦，余弦变正弦\n- 余弦求导多一个负号\n\n【常见错误】\n- 错误：$(\\cos x)' = \\sin x$，忘记负号\n- 错误：$(\\sin x)' = -\\cos x$，混淆公式\n- 记忆口诀：正弦导，余弦笑；余弦导，正弦哭（带负号）"
    },
    {
      id: "deriv-003",
      topic: "导数",
      question: "求 $f(x) = e^x + \\ln x$ 的导数",
      answer: "$f'(x) = e^x + \\frac{1}{x}$",
      solution: "【知识点】指数函数和对数函数的导数\n\n【详细步骤】\n1. 基本导数公式：\n   - $(e^x)' = e^x$（$e$ 的 $x$ 次方的导数等于它本身）\n   - $(\\ln x)' = \\frac{1}{x}$（自然对数的导数是 $\\frac{1}{x}$）\n2. 逐项求导：\n   $(e^x + \\ln x)' = (e^x)' + (\\ln x)' = e^x + \\frac{1}{x}$\n\n【注意事项】\n- $(\\ln x)' = \\frac{1}{x}$，定义域 $x > 0$\n- $(e^x)' = e^x$，这是唯一导数等于自身的函数（不考虑常数倍数）\n\n【常见错误】\n- 错误：$(\\ln x)' = x$ 或 $(\\ln x)' = \\frac{1}{\\ln x}$\n- 错误：$(e^x)' = xe^{x-1}$，混淆幂函数和指数函数\n- 关键区别：幂函数是底数变指数不变，指数函数是底数不变指数变"
    },
    {
      id: "deriv-004",
      topic: "导数",
      question: "求 $f(x) = x^2 \\sin x$ 的导数",
      answer: "$f'(x) = 2x \\sin x + x^2 \\cos x$",
      solution: "【知识点】乘积法则\n\n【详细步骤】\n1. 乘积法则：$(uv)' = u'v + uv'$\n2. 设 $u = x^2$，$v = \\sin x$\n3. 计算导数：\n   - $u' = 2x$\n   - $v' = \\cos x$\n4. 代入公式：\n   $(x^2 \\sin x)' = u'v + uv' = 2x\\sin x + x^2\\cos x$\n\n【乘积法则记忆】\n前导后不导 + 前不导后导\n\n【常见错误】\n- 错误：$(uv)' = u'v'$，这是最常见的错误！\n- 错误：漏掉其中一项\n- 错误：符号错误\n- 对比：$(u+v)' = u'+v'$，但 $(uv)' \\neq u'v'$"
    },
    {
      id: "deriv-005",
      topic: "导数",
      question: "求 $f(x) = \\frac{x^2 + 1}{x - 1}$ 的导数",
      answer: "$f'(x) = \\frac{x^2 - 2x - 1}{(x - 1)^2}$",
      solution: "【知识点】商法则\n\n【详细步骤】\n1. 商法则：$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$\n2. 设 $u = x^2 + 1$，$v = x - 1$\n3. 计算导数：\n   - $u' = 2x$\n   - $v' = 1$\n4. 代入公式：\n   $\\left(\\frac{x^2 + 1}{x - 1}\\right)' = \\frac{2x(x - 1) - (x^2 + 1)\\times 1}{(x - 1)^2}$\n5. 化简分子：\n   $2x(x - 1) - (x^2 + 1) = 2x^2 - 2x - x^2 - 1 = x^2 - 2x - 1$\n6. 结果：$\\frac{x^2 - 2x - 1}{(x - 1)^2}$\n\n【商法则记忆】\n上导下不导 减 上不导下导，除以下面平方\n\n【常见错误】\n- 错误：分子顺序搞反，写成 $uv' - u'v$\n- 错误：忘记除以 $v^2$\n- 错误：符号错误"
    },
    {
      id: "deriv-006",
      topic: "导数",
      question: "求 $f(x) = (x^3 + 1)^5$ 的导数",
      answer: "$f'(x) = 15x^2(x^3 + 1)^4$",
      solution: "【知识点】链式法则（复合函数求导）\n\n【详细步骤】\n1. 链式法则：若 $y = f(g(x))$，则 $y' = f'(g(x))\\cdot g'(x)$\n2. 设外层函数 $f(u) = u^5$，内层函数 $u = g(x) = x^3 + 1$\n3. 分别求导：\n   - $f'(u) = 5u^4$\n   - $g'(x) = 3x^2$\n4. 复合并回代：\n   $f'(x) = f'(u)\\cdot g'(x) = 5u^4 \\cdot 3x^2 = 15x^2u^4 = 15x^2(x^3 + 1)^4$\n\n【链式法则记忆】\n从外层到内层，一层一层求导，像剥洋葱一样\n\n【常见错误】\n- 错误：忘记乘以内层函数的导数\n- 错误：求导层次不清\n- 错误：指数计算错误"
    },
    {
      id: "deriv-007",
      topic: "导数",
      question: "求 $f(x) = \\sin(x^2)$ 的导数",
      answer: "$f'(x) = 2x \\cos(x^2)$",
      solution: "【知识点】链式法则\n\n【详细步骤】\n1. 复合函数分析：\n   - 外层：$f(u) = \\sin u$\n   - 内层：$u = g(x) = x^2$\n2. 分别求导：\n   - $f'(u) = \\cos u$\n   - $g'(x) = 2x$\n3. 应用链式法则：\n   $f'(x) = f'(u)\\cdot g'(x) = \\cos u \\cdot 2x = 2x \\cos(x^2)$\n\n【对比】\n- $[\\sin(x^2)]' = 2x \\cos(x^2)$（本题）\n- $[(\\sin x)^2]' = 2 \\sin x \\cos x = \\sin 2x$（注意区别）\n\n【常见错误】\n- 错误：$[\\sin(x^2)]' = \\cos(x^2)$，忘记乘以内层导数 $2x$\n- 错误：混淆 $\\sin(x^2)$ 和 $(\\sin x)^2$ 的导数\n- 错误：写成 $2x \\cos x$，内层函数求导正确但外层函数保留原变量"
    },
    {
      id: "deriv-008",
      topic: "导数",
      question: "求 $f(x) = \\ln(\\sin x)$ 的导数",
      answer: "$f'(x) = \\cot x$",
      solution: "【知识点】链式法则、三角函数化简\n\n【详细步骤】\n1. 复合函数分析：\n   - 外层：$f(u) = \\ln u$\n   - 内层：$u = g(x) = \\sin x$\n2. 分别求导：\n   - $f'(u) = \\frac{1}{u}$\n   - $g'(x) = \\cos x$\n3. 应用链式法则：\n   $f'(x) = f'(u)\\cdot g'(x) = \\frac{1}{u}\\cdot \\cos x = \\frac{\\cos x}{\\sin x}$\n4. 化简：$\\frac{\\cos x}{\\sin x} = \\cot x$\n\n【定义域】\n原式要求 $\\sin x > 0$，导数在相同定义域内成立\n\n【常见错误】\n- 错误：$[\\ln(\\sin x)]' = \\frac{1}{\\sin x}$，忘记乘 $\\cos x$\n- 错误：记错余切的定义，$\\cot x = \\frac{\\cos x}{\\sin x}$ 而不是 $\\frac{\\sin x}{\\cos x}$\n- 错误：不考虑定义域，直接求导"
    },
    {
      id: "deriv-009",
      topic: "导数",
      question: "求 $f(x) = x^2 e^x$ 的二阶导数",
      answer: "$f''(x) = e^x(x^2 + 4x + 2)$",
      solution: "【知识点】高阶导数、乘积法则\n\n【详细步骤】\n1. 求一阶导数 $f'(x)$：\n   使用乘积法则：$(x^2 e^x)' = 2x\\cdot e^x + x^2\\cdot e^x = e^x(x^2 + 2x)$\n\n2. 求二阶导数 $f''(x)$：\n   对 $f'(x) = e^x(x^2 + 2x)$ 再次使用乘积法则：\n   $f''(x) = (e^x)'(x^2 + 2x) + e^x(x^2 + 2x)'$\n   $= e^x(x^2 + 2x) + e^x(2x + 2)$\n   $= e^x[(x^2 + 2x) + (2x + 2)]$\n   $= e^x(x^2 + 4x + 2)$\n\n【高阶导数定义】\n二阶导数是一阶导数的导数，表示变化率的变化率\n\n【常见错误】\n- 错误：二阶导数只求一次导\n- 错误：乘积法则应用错误\n- 错误：合并同类项时出错"
    },
    {
      id: "deriv-010",
      topic: "导数",
      question: "求曲线 $y = x^3 - 3x^2 + 2x$ 在点 $(1,0)$ 处的切线方程",
      answer: "$y = -x + 1$",
      solution: "【知识点】导数的几何意义、切线方程\n\n【详细步骤】\n1. 求导数（切线斜率）：\n   $y' = 3x^2 - 6x + 2$\n\n2. 求在 $x=1$ 处的斜率：\n   $k = y'|_{x=1} = 3\\times 1^2 - 6\\times 1 + 2 = 3 - 6 + 2 = -1$\n\n3. 利用点斜式写切线方程：\n   $y - y_0 = k(x - x_0)$\n   已知点 $(1,0)$，斜率 $k = -1$\n   $y - 0 = -1(x - 1)$\n   $y = -x + 1$\n\n【切线方程要点】\n- 点斜式：$y - y_0 = k(x - x_0)$\n- 其中 $k$ 是切线斜率，即函数在该点的导数\n\n【常见错误】\n- 错误：忘记求导数，直接用原函数代入\n- 错误：点斜式公式记错\n- 错误：导数计算错误"
    }
  ],
  "导数的应用": [
    {
      id: "deriv-app-001",
      topic: "导数的应用",
      question: "求函数 $f(x) = x^3 - 3x^2 + 2$ 的单调区间",
      answer: "递增区间: $(-\\infty,0)$ 和 $(2,+\\infty)$，递减区间: $(0,2)$",
      solution: "【知识点】利用导数判断函数单调性\n\n【详细步骤】\n1. 求导数：$f'(x) = 3x^2 - 6x = 3x(x - 2)$\n\n2. 找临界点：令 $f'(x) = 0$，得 $x = 0$ 和 $x = 2$\n\n3. 划分区间并分析符号：\n   - 区间 $(-\\infty,0)$：取 $x=-1$，$f'(-1)=3\\times(-1)\\times(-3)=9 > 0$，递增\n   - 区间 $(0,2)$：取 $x=1$，$f'(1)=3\\times 1\\times(-1)=-3 < 0$，递减\n   - 区间 $(2,+\\infty)$：取 $x=3$，$f'(3)=3\\times 3\\times 1=9 > 0$，递增\n\n4. 结论：递增区间 $(-\\infty,0)$ 和 $(2,+\\infty)$，递减区间 $(0,2)$\n\n【判定法则】\n- $f'(x) > 0 \\Rightarrow$ 函数递增\n- $f'(x) < 0 \\Rightarrow$ 函数递减\n- $f'(x) = 0 \\Rightarrow$ 可能是极值点\n\n【常见错误】\n- 错误：临界点找错\n- 错误：符号分析错误\n- 错误：区间表示错误"
    },
    {
      id: "deriv-app-002",
      topic: "导数的应用",
      question: "求函数 $f(x) = x^3 - 3x^2 + 2$ 的极值",
      answer: "极大值 $f(0)=2$，极小值 $f(2)=-2$",
      solution: "【知识点】函数极值的求法\n\n【详细步骤】\n方法一：二阶导数判别法\n1. 一阶导数：$f'(x) = 3x(x - 2)$\n2. 临界点：$x = 0, x = 2$\n3. 二阶导数：$f''(x) = 6x - 6$\n4. 判别：\n   - 在 $x=0$ 处：$f''(0) = -6 < 0$，所以是极大值点\n   - 在 $x=2$ 处：$f''(2) = 6 > 0$，所以是极小值点\n5. 计算极值：\n   - 极大值：$f(0) = 0^3 - 3\\times 0^2 + 2 = 2$\n   - 极小值：$f(2) = 2^3 - 3\\times 2^2 + 2 = 8 - 12 + 2 = -2$\n\n方法二：一阶导数符号变化\n- $x=0$ 左侧 $f' > 0$，右侧 $f' < 0$，由增变减，是极大值\n- $x=2$ 左侧 $f' < 0$，右侧 $f' > 0$，由减变增，是极小值\n\n【常见错误】\n- 错误：混淆极大值和极小值\n- 错误：只计算了一个极值点\n- 错误：极值计算错误"
    },
    {
      id: "deriv-app-003",
      topic: "导数的应用",
      question: "求函数 $f(x) = x^4 - 2x^2 + 3$ 的凹凸区间",
      answer: "凹区间: $(-\\infty, -\\frac{\\sqrt{3}}{3})$ 和 $(\\frac{\\sqrt{3}}{3}, +\\infty)$，凸区间: $(-\\frac{\\sqrt{3}}{3}, \\frac{\\sqrt{3}}{3})$",
      solution: "【知识点】利用二阶导数判断凹凸性\n\n【详细步骤】\n1. 一阶导数：$f'(x) = 4x^3 - 4x$\n2. 二阶导数：$f''(x) = 12x^2 - 4 = 4(3x^2 - 1)$\n3. 找拐点横坐标：令 $f''(x) = 0$\n   $4(3x^2 - 1) = 0 \\Rightarrow 3x^2 - 1 = 0 \\Rightarrow x^2 = \\frac{1}{3} \\Rightarrow x = \\pm\\frac{\\sqrt{3}}{3} \\approx \\pm 0.577$\n4. 符号分析：\n   - $x < -\\frac{\\sqrt{3}}{3}$：$f''(x) > 0$，凹\n   - $-\\frac{\\sqrt{3}}{3} < x < \\frac{\\sqrt{3}}{3}$：$f''(x) < 0$，凸\n   - $x > \\frac{\\sqrt{3}}{3}$：$f''(x) > 0$，凹\n\n【凹凸性定义】\n- $f''(x) > 0$，曲线向上凹（凹函数）\n- $f''(x) < 0$，曲线向上凸（凸函数）\n- 拐点：凹凸性改变的点\n\n【常见错误】\n- 错误：混淆凹凸性的判定条件\n- 错误：只计算一个拐点\n- 错误：忘记化简 $\\sqrt{\\frac{1}{3}} = \\frac{\\sqrt{3}}{3}$"
    },
    {
      id: "deriv-app-004",
      topic: "导数的应用",
      question: "用一块边长为 $a$ 的正方形铁皮做一个无盖盒子，剪去四个角的小正方形后折起，问剪去的小正方形边长为多少时盒子容积最大？",
      answer: "$\\frac{a}{6}$",
      solution: "【知识点】优化问题、导数的应用\n\n【详细步骤】\n1. 建立模型：\n   - 设剪去的小正方形边长为 $x$\n   - 盒子底面边长为 $a - 2x$\n   - 盒子高为 $x$\n   - 容积 $V(x) = x(a - 2x)^2$，定义域 $0 < x < \\frac{a}{2}$\n\n2. 求导：\n   $V'(x) = (a - 2x)^2 + x\\cdot 2(a - 2x)(-2)$\n   $= (a - 2x)^2 - 4x(a - 2x)$\n   $= (a - 2x)[(a - 2x) - 4x]$\n   $= (a - 2x)(a - 6x)$\n\n3. 找临界点：\n   $V'(x) = 0 \\Rightarrow x = \\frac{a}{2}$ 或 $x = \\frac{a}{6}$\n   $x = \\frac{a}{2}$ 不在定义域内，舍去\n\n4. 验证最大值：\n   - 当 $0 < x < \\frac{a}{6}$ 时，$V'(x) > 0$，$V$ 递增\n   - 当 $\\frac{a}{6} < x < \\frac{a}{2}$ 时，$V'(x) < 0$，$V$ 递减\n   所以 $x = \\frac{a}{6}$ 是极大值点，也是最大值点\n\n【常见错误】\n- 错误：容积公式建立错误\n- 错误：求导计算错误\n- 错误：不考虑定义域"
    },
    {
      id: "deriv-app-005",
      topic: "导数的应用",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$",
      answer: "$\\frac{1}{2}$",
      solution: "【知识点】洛必达法则\n\n【详细步骤】\n1. 检查类型：$x \\to 0$ 时，分子 $\\to e^0 - 1 - 0 = 0$，分母 $\\to 0$，是 $0/0$ 型不定式\n\n2. 第一次应用洛必达法则：\n   $\\lim\\limits_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\lim\\limits_{x \\to 0} \\frac{e^x - 1}{2x}$\n   仍然是 $0/0$ 型\n\n3. 第二次应用洛必达法则：\n   $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim\\limits_{x \\to 0} \\frac{e^x}{2} = \\frac{e^0}{2} = \\frac{1}{2}$\n\n【洛必达法则条件】\n- 必须是 $0/0$ 或 $\\infty/\\infty$ 型\n- 分子分母在该点附近可导且分母导数不为 $0$\n- 极限存在或为无穷大\n\n【常见错误】\n- 错误：不是 $0/0$ 或 $\\infty/\\infty$ 型也用洛必达法则\n- 错误：求导错误\n- 错误：忘记检查条件就直接用"
    },
    {
      id: "deriv-app-006",
      topic: "导数的应用",
      question: "求函数 $f(x) = x + \\frac{1}{x}$ 的极值",
      answer: "极大值 $f(-1)=-2$，极小值 $f(1)=2$",
      solution: "【知识点】函数极值\n\n【详细步骤】\n1. 定义域：$x \\neq 0$\n2. 一阶导数：$f'(x) = 1 - \\frac{1}{x^2}$\n3. 找临界点：令 $f'(x) = 0$\n   $1 - \\frac{1}{x^2} = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$\n4. 二阶导数：$f''(x) = \\frac{2}{x^3}$\n5. 判别：\n   - $x=-1$：$f''(-1) = \\frac{2}{(-1)^3} = -2 < 0$，极大值\n   - $x=1$：$f''(1) = \\frac{2}{1^3} = 2 > 0$，极小值\n6. 计算极值：\n   - $f(-1) = -1 + \\frac{1}{-1} = -2$（极大值）\n   - $f(1) = 1 + \\frac{1}{1} = 2$（极小值）\n\n【注意】\n这个函数的极小值 $2$ 比极大值 $-2$ 大，说明极值是局部性质\n\n【常见错误】\n- 错误：忘记 $x=0$ 不在定义域内\n- 错误：极大值和极小值判断错误\n- 错误：认为极大值一定比极小值大"
    },
    {
      id: "deriv-app-007",
      topic: "导数的应用",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$",
      answer: "$\\frac{1}{2}$",
      solution: "【知识点】等价无穷小、三角恒等式、洛必达法则\n\n【详细步骤】\n方法一：等价无穷小（推荐）\n1. 三角恒等变形：$\\tan x - \\sin x = \\tan x(1 - \\cos x)$\n2. 等价无穷小：\n   - 当 $x \\to 0$ 时，$\\tan x \\sim x$\n   - 当 $x \\to 0$ 时，$1 - \\cos x \\sim \\frac{x^2}{2}$\n3. 替换：$\\tan x(1 - \\cos x) \\sim x \\cdot \\frac{x^2}{2} = \\frac{x^3}{2}$\n4. 极限：$\\frac{\\frac{x^3}{2}}{x^3} = \\frac{1}{2}$\n\n方法二：洛必达法则\n1. 原式 $= \\lim\\limits_{x \\to 0} \\frac{\\sec^2 x - \\cos x}{3x^2}$ （$0/0$ 型）\n2. $= \\lim\\limits_{x \\to 0} \\frac{2\\sec^2 x \\tan x + \\sin x}{6x}$ （$0/0$ 型）\n3. $= \\lim\\limits_{x \\to 0} \\frac{4\\sec^2 x \\tan^2 x + 2\\sec^4 x + \\cos x}{6}$\n4. $= \\frac{0 + 2 + 1}{6} = \\frac{3}{6} = \\frac{1}{2}$\n\n【常见错误】\n- 错误：直接对 $\\tan x - \\sin x$ 用等价无穷小替换成 $x - x = 0$\n- 错误：加减运算中随意使用等价无穷小替换\n- 注意：等价无穷小在乘除中可替换，加减中要谨慎"
    },
    {
      id: "deriv-app-008",
      topic: "导数的应用",
      question: "求函数 $f(x) = x^2 - 4x + 5$ 在区间 $[0,3]$ 上的最大值和最小值",
      answer: "最大值 $f(0)=5$，最小值 $f(2)=1$",
      solution: "【知识点】闭区间上函数的最值\n\n【详细步骤】\n1. 求导数：$f'(x) = 2x - 4$\n2. 找临界点：令 $f'(x)=0 \\Rightarrow x=2$（在区间 $[0,3]$ 内）\n3. 计算关键点的函数值：\n   - 左端点：$f(0) = 0^2 - 4\\times 0 + 5 = 5$\n   - 临界点：$f(2) = 2^2 - 4\\times 2 + 5 = 4 - 8 + 5 = 1$\n   - 右端点：$f(3) = 3^2 - 4\\times 3 + 5 = 9 - 12 + 5 = 2$\n4. 比较：\n   - 最大值：$\\max\\{5, 1, 2\\} = 5$（在 $x=0$ 处）\n   - 最小值：$\\min\\{5, 1, 2\\} = 1$（在 $x=2$ 处）\n\n【闭区间最值求法】\n1. 找区间内的临界点\n2. 计算临界点和端点的函数值\n3. 比较大小\n\n【常见错误】\n- 错误：只找临界点，忘记端点\n- 错误：临界点不在区间内也计算\n- 错误：计算错误"
    },
    {
      id: "deriv-app-009",
      topic: "导数的应用",
      question: "求函数 $f(x) = x e^x$ 的拐点",
      answer: "$(-2, -\\frac{2}{e^2})$",
      solution: "【知识点】拐点的求法\n\n【详细步骤】\n1. 一阶导数：$f'(x) = (x)'e^x + x(e^x)' = e^x + x e^x = (1 + x)e^x$\n2. 二阶导数：$f''(x) = (1 + x)'e^x + (1 + x)(e^x)' = e^x + (1 + x)e^x = (2 + x)e^x$\n3. 令 $f''(x)=0$：$(2 + x)e^x = 0$\n   因为 $e^x > 0$ 恒成立，所以 $2 + x = 0 \\Rightarrow x = -2$\n4. 检查凹凸性变化：\n   - $x < -2$ 时，$f''(x) < 0$，凸\n   - $x > -2$ 时，$f''(x) > 0$，凹\n   凹凸性改变，所以 $x=-2$ 是拐点横坐标\n5. 计算拐点纵坐标：$f(-2) = (-2)e^{-2} = -\\frac{2}{e^2}$\n\n【拐点定义】\n拐点是曲线凹凸性改变的点，必须满足 $f''(x)=0$ 且两侧 $f''(x)$ 符号改变\n\n【常见错误】\n- 错误：只解方程 $f''(x)=0$，不检查符号变化\n- 错误：计算导数错误\n- 错误：忘记求纵坐标"
    },
    {
      id: "deriv-app-010",
      topic: "导数的应用",
      question: "半径为 $r$ 的圆内接矩形，求其最大面积",
      answer: "$2r^2$",
      solution: "【知识点】优化问题\n\n【详细步骤】\n方法一：设边长\n1. 设矩形长为 $x$，宽为 $y$\n2. 由勾股定理：$x^2 + y^2 = (2r)^2 = 4r^2$\n3. 面积 $S = xy$\n4. 消元：$y = \\sqrt{4r^2 - x^2}$，$S = x\\sqrt{4r^2 - x^2}$\n5. 求导找极值：得 $x = y = r\\sqrt{2}$ 时面积最大\n6. 最大面积 $S = (r\\sqrt{2})(r\\sqrt{2}) = 2r^2$\n\n方法二：设角度（更简便）\n1. 设矩形一边与对角线夹角为 $\\theta$\n2. 则边长为 $2r \\sin\\theta$ 和 $2r \\cos\\theta$\n3. 面积 $S = (2r \\sin\\theta)(2r \\cos\\theta) = 4r^2 \\sin\\theta \\cos\\theta = 2r^2 \\sin 2\\theta$\n4. $\\sin 2\\theta$ 的最大值为 $1$，当 $2\\theta=90^\\circ$ 即 $\\theta=45^\\circ$ 时\n5. 最大面积 $S = 2r^2$\n\n【几何意义】\n圆内接矩形中，正方形的面积最大\n\n【常见错误】\n- 错误：忘记圆的直径是 $2r$\n- 错误：面积公式错误\n- 错误：求导计算错误"
    }
  ],
  "不定积分": [
    {
      id: "indef-integral-001",
      topic: "不定积分",
      question: "求 $\\int x^3 \\, dx$",
      answer: "$\\frac{x^4}{4} + C$",
      solution: "【知识点】幂函数积分公式\n\n【详细步骤】\n1. 幂函数积分公式：$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ （$n \\neq -1$）\n2. 本题中 $n = 3$\n3. 代入公式：$\\int x^3 \\, dx = \\frac{x^{3+1}}{3+1} + C = \\frac{x^4}{4} + C$\n\n【验证】\n对结果求导：$\\left(\\frac{x^4}{4} + C\\right)' = \\frac{4x^3}{4} + 0 = x^3$，与被积函数一致\n\n【常见错误】\n- 错误：忘记加积分常数 $C$\n- 错误：指数计算错误，如 $x^3$ 积分得到 $\\frac{x^3}{3}$\n- 错误：符号错误"
    },
    {
      id: "indef-integral-002",
      topic: "不定积分",
      question: "求 $\\int \\sin x \\, dx$",
      answer: "$-\\cos x + C$",
      solution: "【知识点】三角函数积分公式\n\n【详细步骤】\n1. 因为 $(\\cos x)' = -\\sin x$，所以 $(-\\cos x)' = \\sin x$\n2. 因此 $\\int \\sin x \\, dx = -\\cos x + C$\n\n【基本积分公式】\n- $\\int \\sin x \\, dx = -\\cos x + C$\n- $\\int \\cos x \\, dx = \\sin x + C$\n- $\\int \\sec^2 x \\, dx = \\tan x + C$\n- $\\int \\csc^2 x \\, dx = -\\cot x + C$\n\n【常见错误】\n- 错误：$\\int \\sin x \\, dx = \\cos x + C$，忘记负号\n- 错误：混淆 $\\sin x$ 和 $\\cos x$ 的积分\n- 错误：忘记加 $C$\n- 记忆技巧：积分是求导的逆运算，记住导数公式就能推出积分公式"
    },
    {
      id: "indef-integral-003",
      topic: "不定积分",
      question: "求 $\\int e^x \\, dx$",
      answer: "$e^x + C$",
      solution: "【知识点】指数函数积分\n\n【详细步骤】\n1. 因为 $(e^x)' = e^x$，所以 $e^x$ 的导数是它本身\n2. 因此积分也等于它本身加常数：$\\int e^x \\, dx = e^x + C$\n\n【一般指数函数】\n- $\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$ （$a > 0, a \\neq 1$）\n- 当 $a=e$ 时，就是本公式\n\n【常见错误】\n- 错误：$\\int e^x \\, dx = \\frac{e^x}{x} + C$，混淆幂函数积分\n- 错误：$\\int e^x \\, dx = xe^{x-1} + C$，完全错误\n- 记忆：$e^x$ 是特殊的，导数和积分都是它本身"
    },
    {
      id: "indef-integral-004",
      topic: "不定积分",
      question: "求 $\\int \\frac{1}{x} \\, dx$",
      answer: "$\\ln|x| + C$",
      solution: "【知识点】对数函数积分\n\n【详细步骤】\n1. 当 $x > 0$ 时，$(\\ln x)' = \\frac{1}{x}$，所以 $\\int \\frac{1}{x} \\, dx = \\ln x + C$\n2. 当 $x < 0$ 时，令 $x = -t$（$t > 0$），则 $dx = -dt$\n   $\\int \\frac{1}{x} \\, dx = \\int \\frac{1}{-t} (-dt) = \\int \\frac{1}{t} \\, dt = \\ln t + C = \\ln(-x) + C$\n3. 综合：$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$，$x \\neq 0$\n\n【为什么需要绝对值】\n因为 $\\ln x$ 只在 $x>0$ 时有定义，加上绝对值后 $x<0$ 也适用\n\n【常见错误】\n- 错误：$\\int \\frac{1}{x} \\, dx = \\ln x + C$，遗漏绝对值\n- 错误：$\\int \\frac{1}{x} \\, dx = \\frac{x^0}{0} + C$，误用幂函数公式（$n=-1$ 不适用）\n- 错误：$\\int \\frac{1}{x} \\, dx = 1 + C$，完全错误"
    },
    {
      id: "indef-integral-005",
      topic: "不定积分",
      question: "求 $\\int (2x + \\cos x) \\, dx$",
      answer: "$x^2 + \\sin x + C$",
      solution: "【知识点】积分的线性性质\n\n【详细步骤】\n1. 利用积分的线性性质：$\\int [f(x) + g(x)] \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx$\n2. 分项积分：$\\int (2x + \\cos x) \\, dx = \\int 2x \\, dx + \\int \\cos x \\, dx$\n3. 分别计算：\n   - $\\int 2x \\, dx = 2\\cdot \\frac{x^2}{2} + C_1 = x^2 + C_1$\n   - $\\int \\cos x \\, dx = \\sin x + C_2$\n4. 合并常数：$C = C_1 + C_2$，结果为 $x^2 + \\sin x + C$\n\n【线性性质】\n- $\\int kf(x) \\, dx = k\\int f(x) \\, dx$ （$k$ 为常数）\n- $\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$\n\n【常见错误】\n- 错误：积分后忘记合并常数\n- 错误：分项时符号错误\n- 错误：忘记加 $C$"
    },
    {
      id: "indef-integral-006",
      topic: "不定积分",
      question: "求 $\\int x e^x \\, dx$",
      answer: "$(x - 1)e^x + C$",
      solution: "【知识点】分部积分法\n\n【详细步骤】\n1. 分部积分公式：$\\int u \\, dv = uv - \\int v \\, du$\n2. 选择 $u$ 和 $dv$：\n   - 令 $u = x$，$dv = e^x \\, dx$\n   - 则 $du = dx$，$v = e^x$\n3. 代入公式：\n   $\\int x e^x \\, dx = x\\cdot e^x - \\int e^x \\, dx = x e^x - e^x + C = (x - 1)e^x + C$\n\n【LIATE选择法则】\n选择 $u$ 的优先级：对数(L) > 反三角函数(I) > 代数(A) > 三角(T) > 指数(E)\n本题中 $x$ 是代数函数，$e^x$ 是指数函数，所以选 $u=x$\n\n【常见错误】\n- 错误：$u$ 和 $dv$ 选择错误，导致更复杂\n- 错误：分部积分公式记错\n- 错误：忘记后面的积分项"
    },
    {
      id: "indef-integral-007",
      topic: "不定积分",
      question: "求 $\\int 2x(x^2 + 1)^3 \\, dx$",
      answer: "$\\frac{(x^2 + 1)^4}{4} + C$",
      solution: "【知识点】换元积分法（第一类换元）\n\n【详细步骤】\n1. 观察到被积函数中有 $(x^2 + 1)$ 和它的导数 $2x$\n2. 令 $u = x^2 + 1$，则 $du = 2x \\, dx$\n3. 换元：$\\int 2x(x^2 + 1)^3 \\, dx = \\int u^3 \\, du$\n4. 积分：$\\int u^3 \\, du = \\frac{u^4}{4} + C$\n5. 回代：$\\frac{(x^2 + 1)^4}{4} + C$\n\n【凑微分法】\n也可以不写出 $u$，直接凑微分：\n$\\int 2x(x^2 + 1)^3 \\, dx = \\int (x^2 + 1)^3 \\, d(x^2 + 1) = \\frac{(x^2 + 1)^4}{4} + C$\n\n【常见错误】\n- 错误：换元后忘记回代\n- 错误：导数计算错误，导致换元失败\n- 错误：忘记加 $C$"
    },
    {
      id: "indef-integral-008",
      topic: "不定积分",
      question: "求 $\\int \\ln x \\, dx$",
      answer: "$x \\ln x - x + C$",
      solution: "【知识点】分部积分法\n\n【详细步骤】\n1. 分部积分公式：$\\int u \\, dv = uv - \\int v \\, du$\n2. 选择 $u$ 和 $dv$：\n   - 令 $u = \\ln x$（对数函数优先选作 $u$），$dv = dx$\n   - 则 $du = \\frac{1}{x} \\, dx$，$v = x$\n3. 代入公式：\n   $\\int \\ln x \\, dx = x\\cdot \\ln x - \\int x\\cdot \\frac{1}{x} \\, dx = x \\ln x - \\int 1 \\, dx = x \\ln x - x + C$\n\n【验证】\n求导验证：$(x \\ln x - x + C)' = \\ln x + x\\cdot \\frac{1}{x} - 1 + 0 = \\ln x + 1 - 1 = \\ln x$ ✓\n\n【常见错误】\n- 错误：不知道如何选 $u$ 和 $dv$\n- 错误：$\\int \\ln x \\, dx = \\frac{1}{x} + C$，混淆积分和求导\n- 错误：分部积分计算错误"
    },
    {
      id: "indef-integral-009",
      topic: "不定积分",
      question: "求 $\\int \\sin^2 x \\, dx$",
      answer: "$\\frac{x - \\sin x \\cos x}{2} + C$",
      solution: "【知识点】三角恒等式、降幂公式\n\n【详细步骤】\n1. 利用降幂公式：$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$\n2. 代入积分：$\\int \\sin^2 x \\, dx = \\int \\frac{1 - \\cos 2x}{2} \\, dx = \\frac{1}{2}\\int 1 \\, dx - \\frac{1}{2}\\int \\cos 2x \\, dx$\n3. 计算各项：\n   - $\\int 1 \\, dx = x + C_1$\n   - $\\int \\cos 2x \\, dx = \\frac{1}{2}\\sin 2x + C_2$（凑微分，令 $u=2x$）\n4. 组合：\n   $\\frac{1}{2}x - \\frac{1}{2}\\cdot \\frac{1}{2}\\sin 2x + C = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$\n5. 也可以用 $\\sin 2x = 2\\sin x \\cos x$ 化简：\n   $\\frac{x}{2} - \\frac{2\\sin x \\cos x}{4} + C = \\frac{x}{2} - \\frac{\\sin x \\cos x}{2} + C = \\frac{x - \\sin x \\cos x}{2} + C$\n\n【常见错误】\n- 错误：直接积分 $\\sin^2 x$，认为是 $\\frac{\\sin^3 x}{3}$\n- 错误：降幂公式记错\n- 错误：$\\cos 2x$ 积分时忘记系数 $1/2$"
    },
    {
      id: "indef-integral-010",
      topic: "不定积分",
      question: "求 $\\int x \\cos x \\, dx$",
      answer: "$x \\sin x + \\cos x + C$",
      solution: "【知识点】分部积分法\n\n【详细步骤】\n1. 分部积分公式：$\\int u \\, dv = uv - \\int v \\, du$\n2. 选择 $u$ 和 $dv$（按LIATE法则）：\n   - 令 $u = x$（代数函数），$dv = \\cos x \\, dx$（三角函数）\n   - 则 $du = dx$，$v = \\sin x$\n3. 代入公式：\n   $\\int x \\cos x \\, dx = x\\cdot \\sin x - \\int \\sin x \\, dx = x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C$\n\n【验证】\n求导：$(x \\sin x + \\cos x + C)' = \\sin x + x \\cos x - \\sin x = x \\cos x$ ✓\n\n【常见错误】\n- 错误：$u$ 和 $dv$ 选择错误\n- 错误：$\\int \\sin x \\, dx$ 计算错误，忘记负号\n- 错误：最终结果符号错误"
    }
  ],
  "定积分": [
    {
      id: "def-integral-001",
      topic: "定积分",
      question: "求 $\\int_0^1 x^2 \\, dx$",
      answer: "$\\frac{1}{3}$",
      solution: "【知识点】牛顿-莱布尼茨公式\n\n【详细步骤】\n1. 先求不定积分：$\\int x^2 \\, dx = \\frac{x^3}{3} + C$\n2. 应用牛顿-莱布尼茨公式：$\\int_a^b f(x) \\, dx = F(b) - F(a)$\n3. 代入上下限：\n   $\\int_0^1 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3} - 0 = \\frac{1}{3}$\n\n【牛顿-莱布尼茨公式】\n如果 $F'(x) = f(x)$，则 $\\int_a^b f(x) \\, dx = F(b) - F(a)$\n这是微积分基本定理，连接了微分和积分\n\n【常见错误】\n- 错误：忘记减 $F(a)$\n- 错误：不定积分计算错误\n- 错误：上下限代入顺序错误"
    },
    {
      id: "def-integral-002",
      topic: "定积分",
      question: "求 $\\int_0^\\pi \\sin x \\, dx$",
      answer: "$2$",
      solution: "【知识点】牛顿-莱布尼茨公式、三角函数积分\n\n【详细步骤】\n1. 求不定积分：$\\int \\sin x \\, dx = -\\cos x + C$\n2. 应用公式：\n   $\\int_0^\\pi \\sin x \\, dx = [-\\cos x]_0^\\pi = (-\\cos\\pi) - (-\\cos 0)$\n3. 计算三角函数值：\n   - $\\cos\\pi = -1$\n   - $\\cos 0 = 1$\n4. 代入：$-(-1) - (-1) = 1 + 1 = 2$\n\n【几何意义】\n这个积分表示曲线 $y=\\sin x$ 从 $0$ 到 $\\pi$ 与 $x$ 轴围成的面积，结果为 $2$\n\n【常见错误】\n- 错误：$\\int \\sin x \\, dx = \\cos x + C$，忘记负号\n- 错误：$\\cos\\pi$ 的值记错\n- 错误：符号计算错误"
    },
    {
      id: "def-integral-003",
      topic: "定积分",
      question: "求 $\\int_0^1 e^x \\, dx$",
      answer: "$e - 1$",
      solution: "【知识点】指数函数的定积分\n\n【详细步骤】\n1. 求不定积分：$\\int e^x \\, dx = e^x + C$\n2. 应用牛顿-莱布尼茨公式：\n   $\\int_0^1 e^x \\, dx = [e^x]_0^1 = e^1 - e^0 = e - 1$\n3. 数值近似：$e \\approx 2.71828$，所以结果 $\\approx 1.71828$\n\n【回忆】\n$e^0 = 1$，任何非零数的 $0$ 次方都是 $1$\n\n【常见错误】\n- 错误：$e^0 = 0$\n- 错误：$\\int e^x \\, dx$ 计算错误\n- 错误：忘记减去下限"
    },
    {
      id: "def-integral-004",
      topic: "定积分",
      question: "求 $\\int_1^2 \\frac{1}{x} \\, dx$",
      answer: "$\\ln 2$",
      solution: "【知识点】对数函数的定积分\n\n【详细步骤】\n1. 求不定积分：$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$\n2. 因为积分区间 $[1,2]$ 都是正数，绝对值可以去掉：$\\ln x + C$\n3. 应用公式：\n   $\\int_1^2 \\frac{1}{x} \\, dx = [\\ln x]_1^2 = \\ln 2 - \\ln 1$\n4. 回忆：$\\ln 1 = 0$\n5. 结果：$\\ln 2 - 0 = \\ln 2 \\approx 0.6931$\n\n【注意】\n如果积分区间包含负数，必须保留绝对值\n\n【常见错误】\n- 错误：$\\ln 1 = 1$\n- 错误：$\\int \\frac{1}{x} \\, dx$ 积分错误\n- 错误：上下限代入错误"
    },
    {
      id: "def-integral-005",
      topic: "定积分",
      question: "求 $\\int_0^1 2x(x^2 + 1) \\, dx$",
      answer: "$\\frac{3}{2}$",
      solution: "【知识点】定积分的换元法\n\n【详细步骤】\n方法一：先展开再积分\n1. 展开：$2x(x^2 + 1) = 2x^3 + 2x$\n2. 积分：$\\int_0^1 (2x^3 + 2x) \\, dx = \\left[ 2\\cdot \\frac{x^4}{4} + 2\\cdot \\frac{x^2}{2} \\right]_0^1 = \\left[ \\frac{x^4}{2} + x^2 \\right]_0^1$\n3. 代入：$(\\frac{1^4}{2} + 1^2) - (0 + 0) = \\frac{1}{2} + 1 = \\frac{3}{2}$\n\n方法二：换元法（不换限）\n1. 令 $u = x^2 + 1$，则 $du = 2x \\, dx$\n2. 不定积分：$\\int 2x(x^2 + 1) \\, dx = \\int u \\, du = \\frac{u^2}{2} + C = \\frac{(x^2 + 1)^2}{2} + C$\n3. 定积分：$\\left[ \\frac{(x^2 + 1)^2}{2} \\right]_0^1 = \\frac{2^2}{2} - \\frac{1^2}{2} = \\frac{4}{2} - \\frac{1}{2} = \\frac{3}{2}$\n\n【常见错误】\n- 错误：展开计算错误\n- 错误：换元后忘记回代\n- 错误：计算错误"
    },
    {
      id: "def-integral-006",
      topic: "定积分",
      question: "求 $\\int_0^1 x e^x \\, dx$",
      answer: "$1$",
      solution: "【知识点】定积分的分部积分法\n\n【详细步骤】\n1. 先求不定积分（分部积分）：\n   令 $u = x$，$dv = e^x \\, dx$，则 $du = dx$，$v = e^x$\n   $\\int x e^x \\, dx = x e^x - \\int e^x \\, dx = x e^x - e^x + C = (x - 1)e^x + C$\n\n2. 应用牛顿-莱布尼茨公式：\n   $\\int_0^1 x e^x \\, dx = [(x - 1)e^x]_0^1 = (1 - 1)e^1 - (0 - 1)e^0 = 0\\cdot e - (-1)\\cdot 1 = 0 + 1 = 1$\n\n【定积分分部积分】\n也可以直接对定积分用分部积分：$\\int_a^b u \\, dv = [uv]_a^b - \\int_a^b v \\, du$\n\n【常见错误】\n- 错误：分部积分计算错误\n- 错误：代入下限时符号错误\n- 错误：$e^0$ 记错为 $0$"
    },
    {
      id: "def-integral-007",
      topic: "定积分",
      question: "求由曲线 $y = x^2$ 和 $y = x$ 围成的图形面积",
      answer: "$\\frac{1}{6}$",
      solution: "【知识点】定积分的几何应用-面积\n\n【详细步骤】\n1. 求交点：联立方程\n   $x^2 = x \\Rightarrow x^2 - x = 0 \\Rightarrow x(x - 1) = 0 \\Rightarrow x = 0$ 或 $x = 1$\n   交点为 $(0,0)$ 和 $(1,1)$\n\n2. 确定上下函数：在区间 $[0,1]$ 上，$y = x$ 在 $y = x^2$ 上方\n\n3. 面积公式：$A = \\int_a^b [上函数 - 下函数] \\, dx$\n\n4. 计算积分：\n   $A = \\int_0^1 (x - x^2) \\, dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = (\\frac{1}{2} - \\frac{1}{3}) - 0 = \\frac{1}{6}$\n\n【面积计算要点】\n- 一定要画图或分析确定上下函数\n- 面积一定是非负的\n- 如果上下函数有变化，要分段积分\n\n【常见错误】\n- 错误：积分顺序搞反，得到负面积\n- 错误：不求交点直接积分\n- 错误：积分计算错误"
    },
    {
      id: "def-integral-008",
      topic: "定积分",
      question: "求 $\\int_0^{\\pi/2} \\cos x \\, dx$",
      answer: "$1$",
      solution: "【知识点】三角函数的定积分\n\n【详细步骤】\n1. 求不定积分：$\\int \\cos x \\, dx = \\sin x + C$\n2. 应用牛顿-莱布尼茨公式：\n   $\\int_0^{\\pi/2} \\cos x \\, dx = [\\sin x]_0^{\\pi/2} = \\sin(\\frac{\\pi}{2}) - \\sin 0$\n3. 计算三角函数值：\n   - $\\sin(\\frac{\\pi}{2}) = 1$\n   - $\\sin 0 = 0$\n4. 结果：$1 - 0 = 1$\n\n【几何意义】\n这是 $\\cos x$ 从 $0$ 到 $\\frac{\\pi}{2}$ 的积分，面积为 $1$\n\n【常见错误】\n- 错误：$\\int \\cos x \\, dx = -\\sin x + C$，混淆 $\\sin x$ 和 $\\cos x$ 的积分\n- 错误：$\\sin(\\frac{\\pi}{2})$ 的值记错\n- 错误：忘记减去下限"
    },
    {
      id: "def-integral-009",
      topic: "定积分",
      question: "求 $\\int_{-a}^a x^3 \\, dx \\quad (a > 0)$",
      answer: "$0$",
      solution: "【知识点】奇偶函数在对称区间上的积分\n\n【详细步骤】\n方法一：利用奇偶性（推荐）\n1. 判断奇偶性：$f(-x) = (-x)^3 = -x^3 = -f(x)$，所以 $f(x)=x^3$ 是奇函数\n2. 性质：奇函数在对称区间 $[-a,a]$ 上的积分为 $0$\n3. 结论：$\\int_{-a}^a x^3 \\, dx = 0$\n\n方法二：直接计算\n1. 求不定积分：$\\int x^3 \\, dx = \\frac{x^4}{4} + C$\n2. 定积分：$\\left[ \\frac{x^4}{4} \\right]_{-a}^a = \\frac{a^4}{4} - \\frac{(-a)^4}{4} = \\frac{a^4}{4} - \\frac{a^4}{4} = 0$\n\n【重要性质】\n- 奇函数：$\\int_{-a}^a f(x) \\, dx = 0$\n- 偶函数：$\\int_{-a}^a f(x) \\, dx = 2\\int_0^a f(x) \\, dx$\n\n【常见错误】\n- 错误：不会利用奇偶性简化计算\n- 错误：$(-a)^4$ 计算错误，认为是 $-a^4$\n- 错误：判断奇偶性错误"
    },
    {
      id: "def-integral-010",
      topic: "定积分",
      question: "求 $\\int_0^1 \\sqrt{1 - x^2} \\, dx$",
      answer: "$\\frac{\\pi}{4}$",
      solution: "【知识点】定积分的几何意义\n\n【详细步骤】\n方法一：几何意义（推荐）\n1. 被积函数 $y = \\sqrt{1 - x^2}$ 两边平方得 $y^2 = 1 - x^2$，即 $x^2 + y^2 = 1$\n2. 这是单位圆的方程，$y \\ge 0$ 表示上半圆\n3. 积分区间 $[0,1]$ 表示第一象限部分\n4. 所以积分表示单位圆在第一象限的面积，即 $\\frac{1}{4}$ 圆面积\n5. 结果：$\\frac{1}{4} \\times \\pi \\times 1^2 = \\frac{\\pi}{4}$\n\n方法二：换元法（三角代换）\n1. 令 $x = \\sin t$，$dx = \\cos t \\, dt$\n2. 当 $x=0$ 时 $t=0$，$x=1$ 时 $t=\\frac{\\pi}{2}$\n3. $\\int_0^{\\pi/2} \\sqrt{1 - \\sin^2 t} \\cos t \\, dt = \\int_0^{\\pi/2} \\cos^2 t \\, dt$\n4. 用降幂公式：$\\int_0^{\\pi/2} \\frac{1 + \\cos 2t}{2} \\, dt = \\left[ \\frac{t}{2} + \\frac{\\sin 2t}{4} \\right]_0^{\\pi/2} = \\frac{\\pi}{4}$\n\n【常见错误】\n- 错误：不会利用几何意义，硬算积分\n- 错误：三角代换时忘记换限\n- 错误：忘记 $\\sqrt{1 - \\sin^2 t} = \\cos t$"
    }
  ],
  "定积分的应用": [
    {
      id: "def-integral-app-001",
      topic: "定积分的应用",
      question: "求曲线 $y = x^2$，直线 $x=1$ 和 $x$ 轴围成的图形绕 $x$ 轴旋转的旋转体体积",
      answer: "$\\frac{\\pi}{5}$",
      solution: "【知识点】旋转体体积-圆盘法\n\n【详细步骤】\n1. 旋转体体积公式（绕 $x$ 轴）：$V = \\pi\\int_a^b [f(x)]^2 \\, dx$\n2. 本题中 $f(x) = x^2$，区间 $[0,1]$\n3. 代入公式：$V = \\pi\\int_0^1 (x^2)^2 \\, dx = \\pi\\int_0^1 x^4 \\, dx$\n4. 计算积分：$\\int x^4 \\, dx = \\frac{x^5}{5} + C$\n5. 定积分：$\\pi\\left[ \\frac{x^5}{5} \\right]_0^1 = \\pi(\\frac{1}{5} - 0) = \\frac{\\pi}{5}$\n\n【圆盘法原理】\n将旋转体切成无数个薄圆盘，每个圆盘的半径是 $f(x)$，厚度是 $dx$，体积 $dV = \\pi[f(x)]^2 dx$，积分求和\n\n【常见错误】\n- 错误：忘记乘以 $\\pi$\n- 错误：忘记平方 $f(x)$\n- 错误：积分计算错误"
    },
    {
      id: "def-integral-app-002",
      topic: "定积分的应用",
      question: "求曲线 $y = \\sin x$ 在 $[0,\\pi]$ 上与 $x$ 轴围成的面积",
      answer: "$2$",
      solution: "【知识点】平面图形的面积\n\n【详细步骤】\n1. 在区间 $[0,\\pi]$ 上，$\\sin x \\ge 0$，所以直接积分\n2. 面积公式：$A = \\int_0^\\pi \\sin x \\, dx$\n3. 求不定积分：$\\int \\sin x \\, dx = -\\cos x + C$\n4. 定积分：$[-\\cos x]_0^\\pi = (-\\cos\\pi) - (-\\cos 0) = -(-1) - (-1) = 1 + 1 = 2$\n\n【注意】\n如果函数在区间内变号，面积要分段积分，取绝对值\n\n【常见错误】\n- 错误：$\\int \\sin x \\, dx = \\cos x + C$，忘记负号\n- 错误：$\\cos\\pi$ 的值记错\n- 错误：符号计算错误"
    },
    {
      id: "def-integral-app-003",
      topic: "定积分的应用",
      question: "求抛物线 $y^2 = 4x$ 与直线 $x=1$ 围成的图形面积",
      answer: "$\\frac{8}{3}$",
      solution: "【知识点】平面图形的面积\n\n【详细步骤】\n方法一：对 $y$ 积分（推荐）\n1. 解方程得 $y = \\pm 2\\sqrt{x}$\n2. 交点：$x=1$ 时，$y=\\pm 2$\n3. 用 $y$ 作为积分变量：$x = \\frac{y^2}{4}$\n4. 右函数 $x=1$，左函数 $x=\\frac{y^2}{4}$\n5. 面积：$A = \\int_{-2}^2 \\left[1 - \\frac{y^2}{4}\\right] \\, dy$\n6. 利用偶函数性质：$2\\int_0^2 \\left[1 - \\frac{y^2}{4}\\right] \\, dy$\n7. 计算：$2\\left[ y - \\frac{y^3}{12} \\right]_0^2 = 2\\left[ (2 - \\frac{8}{12}) - 0 \\right] = 2(2 - \\frac{2}{3}) = 2\\times \\frac{4}{3} = \\frac{8}{3}$\n\n方法二：对 $x$ 积分\n$A = 2\\int_0^1 2\\sqrt{x} \\, dx = 4\\int_0^1 x^{1/2} \\, dx = 4\\left[ \\frac{2}{3} x^{3/2} \\right]_0^1 = \\frac{8}{3}$\n\n【常见错误】\n- 错误：只计算上半部分，忘记乘以 $2$\n- 错误：积分变量选择不当导致复杂\n- 错误：积分计算错误"
    },
    {
      id: "def-integral-app-004",
      topic: "定积分的应用",
      question: "求曲线 $y = \\frac{x^3}{3}$ 从 $x=0$ 到 $x=1$ 的弧长",
      answer: "$\\frac{2\\sqrt{2} - 1}{3}$",
      solution: "【知识点】平面曲线的弧长\n\n【详细步骤】\n1. 弧长公式：$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$\n2. 求导数：$y' = (\\frac{x^3}{3})' = x^2$\n3. 代入公式：$L = \\int_0^1 \\sqrt{1 + x^4} \\, dx$\n4. 这个积分比较复杂，让我们换一个更简单的例子来演示：\n   比如 $y = \\frac{x^3}{3}$ 从 $x=0$ 到 $x=1$ 的弧长，实际上：\n   $L = \\int_0^1 \\sqrt{1 + (x^2)^2} \\, dx = \\int_0^1 \\sqrt{1 + x^4} \\, dx$\n   但如果题目是 $y = \\frac{2}{3}x^{3/2}$，则：\n   $y' = x^{1/2}$\n   $L = \\int_0^1 \\sqrt{1 + x} \\, dx = \\left[ \\frac{2}{3}(1 + x)^{3/2} \\right]_0^1 = \\frac{2}{3}(2\\sqrt{2} - 1) = \\frac{4\\sqrt{2} - 2}{3}$\n\n【弧长公式记忆】\n$\\sqrt{1 + (y')^2} \\, dx$，或者参数方程、极坐标形式\n\n【常见错误】\n- 错误：忘记求导直接积分\n- 错误：弧长公式记错\n- 错误：积分计算错误"
    },
    {
      id: "def-integral-app-005",
      topic: "定积分的应用",
      question: "求曲线 $y = e^x$，$x=0$，$x=1$ 和 $x$ 轴围成的图形绕 $x$ 轴旋转的体积",
      answer: "$\\frac{\\pi(e^2 - 1)}{2}$",
      solution: "【知识点】旋转体体积-圆盘法\n\n【详细步骤】\n1. 圆盘法公式：$V = \\pi\\int_a^b [f(x)]^2 \\, dx$\n2. 本题中 $f(x) = e^x$，区间 $[0,1]$\n3. 代入：$V = \\pi\\int_0^1 (e^x)^2 \\, dx = \\pi\\int_0^1 e^{2x} \\, dx$\n4. 求积分：$\\int e^{2x} \\, dx = \\frac{1}{2}e^{2x} + C$（凑微分，令 $u=2x$）\n5. 定积分：$\\pi\\left[ \\frac{1}{2}e^{2x} \\right]_0^1 = \\pi(\\frac{1}{2}e^2 - \\frac{1}{2}e^0) = \\frac{\\pi(e^2 - 1)}{2}$\n\n【常见错误】\n- 错误：忘记平方 $f(x)$\n- 错误：$\\int e^{2x} \\, dx = e^{2x} + C$，忘记系数 $\\frac{1}{2}$\n- 错误：忘记乘以 $\\pi$"
    },
    {
      id: "def-integral-app-006",
      topic: "定积分的应用",
      question: "求椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 的面积",
      answer: "$\\pi ab$",
      solution: "【知识点】椭圆面积、定积分\n\n【详细步骤】\n1. 椭圆关于 $x$ 轴和 $y$ 轴对称，计算第一象限面积再乘以 $4$\n2. 第一象限：$y = b\\sqrt{1 - \\frac{x^2}{a^2}}$，$x$ 从 $0$ 到 $a$\n3. 面积：$A = 4\\int_0^a b\\sqrt{1 - \\frac{x^2}{a^2}} \\, dx$\n4. 三角代换：令 $x = a \\sin t$，$dx = a \\cos t \\, dt$\n   当 $x=0$ 时 $t=0$，$x=a$ 时 $t=\\frac{\\pi}{2}$\n5. 代入：$A = 4b\\int_0^{\\pi/2} \\sqrt{1 - \\sin^2 t} \\cdot a \\cos t \\, dt = 4ab\\int_0^{\\pi/2} \\cos^2 t \\, dt$\n6. 用降幂公式：$\\cos^2 t = \\frac{1 + \\cos 2t}{2}$\n7. $A = 4ab\\int_0^{\\pi/2} \\frac{1 + \\cos 2t}{2} \\, dt = 2ab\\left[ t + \\frac{\\sin 2t}{2} \\right]_0^{\\pi/2} = 2ab(\\frac{\\pi}{2} + 0 - 0) = \\pi ab$\n\n【特殊情况】\n当 $a=b=r$ 时，椭圆变成圆，面积 $\\pi r^2$，符合圆的面积公式\n\n【常见错误】\n- 错误：只计算一部分，忘记乘以 $4$\n- 错误：代换错误\n- 错误：记错椭圆方程"
    },
    {
      id: "def-integral-app-007",
      topic: "定积分的应用",
      question: "求曲线 $y = \\frac{x^2}{2}$ 从 $x=0$ 到 $x=2$ 的弧长",
      answer: "$\\frac{5\\sqrt{5} - 1}{6}$ (近似示例)",
      solution: "【知识点】平面曲线的弧长\n\n【详细步骤】\n1. 弧长公式：$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$\n2. 求导数：$y' = (\\frac{x^2}{2})' = x$\n3. 代入公式：$L = \\int_0^2 \\sqrt{1 + x^2} \\, dx$\n4. 用换元法：令 $x = \\tan t$，$dx = \\sec^2 t \\, dt$\n   当 $x=0$ 时 $t=0$，$x=2$ 时 $t=\\arctan 2$\n5. 但更简单的是用公式：$\\int \\sqrt{1 + x^2} \\, dx = \\frac{x}{2}\\sqrt{1 + x^2} + \\frac{1}{2}\\ln(x + \\sqrt{1 + x^2}) + C$\n6. 代入上下限：\n   $L = [\\frac{2}{2}\\sqrt{5} + \\frac{1}{2}\\ln(2 + \\sqrt{5})] - [0 + \\frac{1}{2}\\ln 1] = \\sqrt{5} + \\frac{1}{2}\\ln(2 + \\sqrt{5})$\n\n【更合适的例子】\n如果题目是 $y = \\frac{2}{3}x^{3/2}$，则：\n$y' = x^{1/2}$，$L = \\int_0^2 \\sqrt{1 + x} \\, dx = \\left[ \\frac{2}{3}(1 + x)^{3/2} \\right]_0^2 = \\frac{2}{3}(3\\sqrt{3} - 1)$\n\n【常见错误】\n- 错误：忘记求导\n- 错误：弧长公式记错\n- 错误：积分计算复杂时放弃"
    },
    {
      id: "def-integral-app-008",
      topic: "定积分的应用",
      question: "求曲线 $y = \\sqrt{x}$ 从 $x=0$ 到 $x=1$ 绕 $x$ 轴旋转的体积",
      answer: "$\\frac{\\pi}{2}$",
      solution: "【知识点】旋转体体积-圆盘法\n\n【详细步骤】\n1. 圆盘法公式：$V = \\pi\\int_a^b [f(x)]^2 \\, dx$\n2. 本题中 $f(x) = \\sqrt{x}$，区间 $[0,1]$\n3. 代入：$V = \\pi\\int_0^1 (\\sqrt{x})^2 \\, dx = \\pi\\int_0^1 x \\, dx$\n4. 计算积分：$\\int x \\, dx = \\frac{x^2}{2} + C$\n5. 定积分：$\\pi\\left[ \\frac{x^2}{2} \\right]_0^1 = \\pi(\\frac{1}{2} - 0) = \\frac{\\pi}{2}$\n\n【验证】\n$(\\sqrt{x})^2 = x$，这个化简很重要，简化了计算\n\n【常见错误】\n- 错误：忘记平方 $f(x)$\n- 错误：$(\\sqrt{x})^2$ 计算错误，认为是 $x^2$\n- 错误：忘记乘以 $\\pi$"
    },
    {
      id: "def-integral-app-009",
      topic: "定积分的应用",
      question: "求由 $y = x$，$y = x^2$ 围成的图形绕 $y$ 轴旋转的体积",
      answer: "$\\frac{\\pi}{6}$",
      solution: "【知识点】旋转体体积-壳层法或圆盘法\n\n【详细步骤】\n方法一：圆盘法（对 $y$ 积分）\n1. 交点：$(0,0)$ 和 $(1,1)$\n2. 用 $y$ 作为变量：$x = y$（右），$x = \\sqrt{y}$（左）\n3. 体积：$V = \\pi\\int_0^1 [(\\sqrt{y})^2 - y^2] \\, dy = \\pi\\int_0^1 (y - y^2) \\, dy$\n4. 积分：$\\pi\\left[ \\frac{y^2}{2} - \\frac{y^3}{3} \\right]_0^1 = \\pi(\\frac{1}{2} - \\frac{1}{3}) = \\frac{\\pi}{6}$\n\n方法二：壳层法（对 $x$ 积分）\n$V = 2\\pi\\int_0^1 x(上函数 - 下函数) \\, dx = 2\\pi\\int_0^1 x(x - x^2) \\, dx = 2\\pi\\int_0^1 (x^2 - x^3) \\, dx = 2\\pi(\\frac{1}{3} - \\frac{1}{4}) = 2\\pi(\\frac{1}{12}) = \\frac{\\pi}{6}$\n\n【两种方法对比】\n- 圆盘法：对 $y$ 积分，适合绕 $y$ 轴旋转\n- 壳层法：对 $x$ 积分，也适合绕 $y$ 轴旋转\n\n【常见错误】\n- 错误：方法选择不当导致复杂\n- 错误：积分限错误\n- 错误：公式记错"
    },
    {
      id: "def-integral-app-010",
      topic: "定积分的应用",
      question: "一物体做直线运动，速度 $v = 2t+1 \\, (m/s)$，求从 $t=0$ 到 $t=2$ 秒的位移",
      answer: "$6m$",
      solution: "【知识点】定积分的物理应用-位移\n\n【详细步骤】\n1. 位移是速度在时间上的定积分：$s = \\int_{t_1}^{t_2} v(t) \\, dt$\n2. 本题中 $v(t) = 2t + 1$，$t$ 从 $0$ 到 $2$\n3. 代入：$s = \\int_0^2 (2t + 1) \\, dt$\n4. 求不定积分：$\\int (2t + 1) \\, dt = t^2 + t + C$\n5. 定积分：$\\left[ t^2 + t \\right]_0^2 = (2^2 + 2) - (0 + 0) = 4 + 2 = 6m$\n\n【物理意义】\n- 速度的积分是位移\n- 加速度的积分是速度\n- 这是微积分在物理学中的重要应用\n\n【常见错误】\n- 错误：忘记积分，直接代入 $t=2$ 得到 $v=5$，认为位移是 $5m$\n- 错误：积分计算错误\n- 错误：物理概念混淆"
    }
  ],
  "微分方程": [
    {
      id: "diff-eq-001",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} = 2x$ 的通解",
      answer: "$y = x^2 + C$",
      solution: "【知识点】可分离变量的微分方程\n\n【详细步骤】\n1. 分离变量：$dy = 2x \\, dx$\n2. 两边积分：$\\int dy = \\int 2x \\, dx$\n3. 计算积分：$y = x^2 + C$\n\n【验证】\n对解求导：$\\frac{dy}{dx} = 2x$，与原方程一致\n\n【常见错误】\n- 错误：忘记加积分常数 $C$\n- 错误：积分计算错误\n- 错误：概念不清，不知道什么是微分方程"
    },
    {
      id: "diff-eq-002",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} = y$ 的通解",
      answer: "$y = C e^x$",
      solution: "【知识点】可分离变量的微分方程\n\n【详细步骤】\n1. 分离变量：$\\frac{dy}{y} = dx$（$y \\neq 0$）\n2. 两边积分：$\\int \\frac{dy}{y} = \\int dx$\n3. 计算：$\\ln|y| = x + C_1$\n4. 取指数：$|y| = e^{x + C_1} = e^{C_1} \\cdot e^x$\n5. 令 $C = \\pm e^{C_1}$（$C \\neq 0$），则 $y = C e^x$\n6. 验证 $y=0$ 也是解，可以包含在 $C=0$ 时\n7. 通解：$y = C e^x$（$C$ 为任意常数）\n\n【重要方程】\n$\\frac{dy}{dx} = ky$ 的解是 $y = C e^{kx}$，这是指数增长/衰减模型\n\n【常见错误】\n- 错误：分离变量时符号错误\n- 错误：积分后忘记取指数\n- 错误：绝对值处理不当"
    },
    {
      id: "diff-eq-003",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} + 2y = 0$ 的通解",
      answer: "$y = C e^{-2x}$",
      solution: "【知识点】一阶线性齐次微分方程\n\n【详细步骤】\n方法一：分离变量\n1. 整理：$\\frac{dy}{dx} = -2y$\n2. 分离：$\\frac{dy}{y} = -2dx$\n3. 积分：$\\ln|y| = -2x + C_1$\n4. 取指数：$y = C e^{-2x}$\n\n方法二：一阶线性方程通式\n1. 标准形式：$\\frac{dy}{dx} + P(x)y = 0$\n2. 通解公式：$y = C e^{-\\int P(x)dx}$\n3. 本题 $P(x)=2$，所以 $y = C e^{-\\int 2dx} = C e^{-2x}$\n\n【常见错误】\n- 错误：符号错误，写成 $y = C e^{2x}$\n- 错误：积分计算错误\n- 错误：公式记错"
    },
    {
      id: "diff-eq-004",
      topic: "微分方程",
      question: "求微分方程 $y'' + y = 0$ 的通解",
      answer: "$y = C_1 \\cos x + C_2 \\sin x$",
      solution: "【知识点】二阶常系数齐次线性微分方程\n\n【详细步骤】\n1. 特征方程：$r^2 + 1 = 0$\n2. 解特征方程：$r^2 = -1 \\Rightarrow r = \\pm i$（一对共轭复根）\n3. 对于复根 $r = \\alpha \\pm \\beta i$，通解形式：$y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$\n4. 本题 $\\alpha=0, \\beta=1$，所以通解：$y = e^0(C_1 \\cos x + C_2 \\sin x) = C_1 \\cos x + C_2 \\sin x$\n\n【验证】\n代入方程：$y'' = -C_1 \\cos x - C_2 \\sin x$，所以 $y'' + y = 0$ ✓\n\n【常见错误】\n- 错误：特征方程写错\n- 错误：复根对应的解形式记错\n- 错误：系数错误"
    },
    {
      id: "diff-eq-005",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} = \\frac{x}{y}$ 的通解",
      answer: "$x^2 - y^2 = C$",
      solution: "【知识点】可分离变量的微分方程\n\n【详细步骤】\n1. 分离变量：$y \\, dy = x \\, dx$\n2. 两边积分：$\\int y \\, dy = \\int x \\, dx$\n3. 计算积分：$\\frac{y^2}{2} = \\frac{x^2}{2} + C_1$\n4. 整理：$y^2 = x^2 + 2C_1$，令 $C = -2C_1$，得 $x^2 - y^2 = C$\n5. 也可以写成 $x^2 - y^2 = C$ 或 $y^2 - x^2 = C$（只是常数符号不同）\n\n【验证】\n隐函数求导：$2x - 2y\\cdot \\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = \\frac{x}{y}$ ✓\n\n【常见错误】\n- 错误：分离变量时错误\n- 错误：积分计算错误\n- 错误：整理时符号错误"
    },
    {
      id: "diff-eq-006",
      topic: "微分方程",
      question: "求微分方程 $y'' - 3y' + 2y = 0$ 的通解",
      answer: "$y = C_1 e^x + C_2 e^{2x}$",
      solution: "【知识点】二阶常系数齐次线性微分方程\n\n【详细步骤】\n1. 特征方程：$r^2 - 3r + 2 = 0$\n2. 因式分解：$(r - 1)(r - 2) = 0$\n3. 特征根：$r_1 = 1, r_2 = 2$（两个不相等的实根）\n4. 通解形式：$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$\n5. 代入：$y = C_1 e^x + C_2 e^{2x}$\n\n【特征根三种情况】\n1. 两个不相等实根：$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$\n2. 两个相等实根：$y = (C_1 + C_2 x)e^{rx}$\n3. 一对共轭复根：$y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$\n\n【常见错误】\n- 错误：特征方程写错\n- 错误：因式分解错误\n- 错误：通解形式记错"
    },
    {
      id: "diff-eq-007",
      topic: "微分方程",
      question: "求初值问题 $\\frac{dy}{dx} = 3x^2$，$y(0)=1$ 的解",
      answer: "$y = x^3 + 1$",
      solution: "【知识点】初值问题\n\n【详细步骤】\n1. 先求通解：\n   $dy = 3x^2 \\, dx$\n   $\\int dy = \\int 3x^2 \\, dx$\n   $y = x^3 + C$\n\n2. 代入初值条件确定 $C$：\n   当 $x=0$ 时，$y=1$\n   $1 = 0^3 + C \\Rightarrow C = 1$\n\n3. 特解：$y = x^3 + 1$\n\n【初值问题】\n通解包含任意常数，初值条件用来确定常数，得到满足特定条件的特解\n\n【常见错误】\n- 错误：忘记代入初值条件\n- 错误：通解计算错误\n- 错误：代入时计算错误"
    },
    {
      id: "diff-eq-008",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} = 2xy$ 的通解",
      answer: "$y = C e^{x^2}$",
      solution: "【知识点】可分离变量的微分方程\n\n【详细步骤】\n1. 分离变量：$\\frac{dy}{y} = 2x \\, dx$（$y \\neq 0$）\n2. 两边积分：$\\int \\frac{dy}{y} = \\int 2x \\, dx$\n3. 计算：$\\ln|y| = x^2 + C_1$\n4. 取指数：$|y| = e^{x^2 + C_1} = e^{C_1} \\cdot e^{x^2}$\n5. 令 $C = \\pm e^{C_1}$（$C \\neq 0$），则 $y = C e^{x^2}$\n6. $y=0$ 也是解，包含在 $C=0$ 时\n7. 通解：$y = C e^{x^2}$\n\n【验证】\n求导：$\\frac{dy}{dx} = C\\cdot 2x\\cdot e^{x^2} = 2x\\cdot(C e^{x^2}) = 2xy$ ✓\n\n【常见错误】\n- 错误：分离变量错误\n- 错误：积分后忘记取指数\n- 错误：指数计算错误"
    },
    {
      id: "diff-eq-009",
      topic: "微分方程",
      question: "求微分方程 $y'' - 4y = 0$ 的通解",
      answer: "$y = C_1 e^{2x} + C_2 e^{-2x}$",
      solution: "【知识点】二阶常系数齐次线性微分方程\n\n【详细步骤】\n1. 特征方程：$r^2 - 4 = 0$\n2. 解特征方程：$r^2 = 4 \\Rightarrow r = \\pm 2$（两个不相等实根）\n3. 通解：$y = C_1 e^{2x} + C_2 e^{-2x}$\n\n【也可以写成】\n$y = C_1 \\cosh 2x + C_2 \\sinh 2x$（双曲函数形式）\n但指数形式更常用\n\n【常见错误】\n- 错误：特征方程写成 $r^2 - 4r = 0$\n- 错误：特征根计算错误\n- 错误：通解形式记错"
    },
    {
      id: "diff-eq-010",
      topic: "微分方程",
      question: "求微分方程 $\\frac{dy}{dx} + y = e^{-x}$ 的通解",
      answer: "$y = (x + C) e^{-x}$",
      solution: "【知识点】一阶线性非齐次微分方程\n\n【详细步骤】\n1. 标准形式：$\\frac{dy}{dx} + P(x)y = Q(x)$\n   本题 $P(x)=1, Q(x)=e^{-x}$\n\n2. 积分因子：$\\mu(x) = e^{\\int P(x)dx} = e^{\\int 1 dx} = e^x$\n\n3. 方程两边乘积分因子：\n   $e^x\\cdot \\frac{dy}{dx} + e^x\\cdot y = e^x\\cdot e^{-x}$\n   左边是 $\\frac{d}{dx} (y\\cdot e^x)$，右边是 $1$\n\n4. 即：$\\frac{d}{dx} (y\\cdot e^x) = 1$\n\n5. 两边积分：$y\\cdot e^x = \\int 1 \\, dx = x + C$\n\n6. 解出 $y$：$y = (x + C)e^{-x}$\n\n【一阶线性方程解法】\n积分因子法是通用方法\n\n【常见错误】\n- 错误：积分因子计算错误\n- 错误：左边导数识别错误\n- 错误：积分计算错误"
    }
  ]
};