# 滑动窗口

滑动窗口是数组/字符串问题中常用的抽象概念。 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)[*i*,*j*)（左闭，右开）。而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i, j)[*i*,*j*) 向右滑动 11 个元素，则它将变为 [i+1, j+1)[*i*+1,*j*+1)（左闭，右开）。