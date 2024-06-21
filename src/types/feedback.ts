export type FeedbackType = 'Bug' | 'Suggestion';

export interface Feedback{
    name: string;
    email: string;
    type: FeedbackType;
    title: string;
    message: string;
    date: Date;
}


//Return how long ago the feedback was done with a proper format
export function timeAgo(feedback: Feedback): string{
    var seconds = Math.floor((Date.now() - feedback.date.getTime()) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + 'year' + (interval > 2 ? 's' : ''); //if interval > 2, unit is plural
    }

    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + 'month' + (interval > 2 ? 's' : '');
    }

    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + 'day' + (interval > 2 ? 's' : '');
    }

    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + 'h';
    }

    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + 'min';
    }

    return Math.floor(seconds) + 's';
}