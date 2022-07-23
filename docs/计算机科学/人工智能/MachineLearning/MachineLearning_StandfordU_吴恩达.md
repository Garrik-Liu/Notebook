---
title: Machine Learning - Standard University - 吴恩达
---

[Coursera - Machine Learning](https://www.coursera.org/learn/machine-learning-course/home/week/1)

## Introduction

### What is Machine Learning?

:::: info Machine learning
Field of study that gives computers the ability to learn without being explicitly learned
<br />-- Arthur Samuel (1959)

Well-posed Learning
Problem: A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its
performance on T, as measured by P, improves with experience E.
<br />-- Tom Mitchell (1998)
::::

::: details 🌰 举例说明 E, T, P

![20220627002522](https://raw.githubusercontent.com/Garrik-Liu/image-save/main/imgs/20220627002522.png)

---

Example: playing checkers.

- E = the experience of playing many games of checkers
- T = the task of playing checkers.
- P = the probability that the program will win the next game.

:::

Machine Learning Algorithms:

- **Supervised Learning**: You teach computer how to do something;
- **Unsupervised Learning**: Computer learn by itself;
- Others: Reinforcement Learning, Recommender Systems;

### Supervised Learning

In supervised learning,

- we are given **a data set** and already know what our **correct output** should look like
- having the idea that there is a **relationship** between the input and the output.

Problems are categorized into "**regression**" and "**classification**" problems

- In a **regression** problem, we are trying to predict results within a **continuous output**, meaning that we are trying to map input variables to some continuous function.
- In a **classification** problem, we are instead trying to predict results in a **discrete output**. In other words, we are trying to map input variables into discrete categories.

::: details 🌰 Regression 和 Classification 区别
Example 1:

Given data about the size of houses on the real estate market, try to predict their price. Price as a function of size is a continuous output, so this is a regression problem.

We could turn this example into a classification problem by instead making our output about whether the house "sells for more or less than the asking price." Here we are classifying the houses based on price into two discrete categories.

---

Example 2:

- (a) Regression - Given a picture of a person, we have to predict their age on the basis of the given picture
- (b) Classification - Given a patient with a tumor, we have to predict whether the tumor is malignant or benign.

![20220627005832](https://raw.githubusercontent.com/Garrik-Liu/image-save/main/imgs/20220627005832.png)
![20220627005723](https://raw.githubusercontent.com/Garrik-Liu/image-save/main/imgs/20220627005723.png)

:::

### Unsupervised Learning
