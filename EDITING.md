# Editing the website without AI

Routine wording changes can be made entirely in GitHub. You do not need to
install anything or edit the files in `app/` or `components/`.

## Where to make each change

Open the [`content`](content) folder and choose the file that matches the page:

| What you want to change | File |
| --- | --- |
| Business name, email, website address, location, menu, or footer | [`content/site.ts`](content/site.ts) |
| Home page headings, introduction, statistics, or buttons | [`content/home.ts`](content/home.ts) |
| Founder details, qualifications, or biography | [`content/about.ts`](content/about.ts) |
| Service descriptions or the four methodology steps | [`content/services.ts`](content/services.ts) |
| Contact page wording or its checklist | [`content/contact.ts`](content/contact.ts) |
| Insights page wording, existing articles, or new articles | [`content/insights.ts`](content/insights.ts) |

Each file begins with an `EDIT HERE` comment. Text is inside quotation marks.
Change the words between the quotation marks, leaving the surrounding labels,
commas, brackets, and quotation marks in place.

## Make a simple text change in GitHub

1. Open the repository in GitHub and select the `content` folder.
2. Open the file for the page you want to change.
3. Select the pencil icon labelled **Edit this file**.
4. Change only the text between quotation marks.
5. Select **Commit changes…**.
6. In the commit message, briefly describe the change, such as
   `Update contact email`.
7. Choose **Create a new branch for this commit and start a pull request**.
   This gives you a previewable, reviewable change without altering the live
   site immediately.
8. Create the pull request. When the automated checks pass and the preview
   looks right, merge it. Merging to `main` triggers the live deployment.

The deployment normally takes a few minutes. Its progress appears under the
repository's **Actions** tab.

## Add an Insights article

Open [`content/insights.ts`](content/insights.ts). Copy one complete article
block inside the `posts` list, paste the copy at the top of the list, then edit:

- `slug`: the page address, using lowercase words and hyphens only
- `title`: the article title
- `date`: in `YYYY-MM-DD` format
- `excerpt`: the summary shown on the Insights and home pages
- `body`: one quoted item per paragraph, separated by commas

Keep the newest article first. Every `slug` must be unique.

Example:

```ts
{
  slug: "my-new-article",
  title: "My new article",
  date: "2026-09-14",
  excerpt: "A short summary of the article.",
  body: [
    "The opening paragraph.",
    "The second paragraph.",
  ],
},
```

## Avoid accidental formatting problems

- Keep ordinary text inside double quotation marks (`"like this"`).
- If the text itself needs double quotation marks, use single quotation marks
  inside the sentence, or ask a technical reviewer to check the change.
- Keep the comma after each item.
- Do not rename labels such as `heading`, `title`, `body`, or `href`.
- Do not edit `app/`, `components/`, or styling files for routine copy changes.

If an automated check fails, do not merge the pull request. Reopen the edited
file and compare the punctuation around your change with a nearby working item.
