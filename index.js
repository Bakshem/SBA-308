const courseInfo = {
    id : 308,
    name : "Introduction to JavaScript"
};

const assignmentGroup = {
    id : 308_01,
    name : "JavaScript Basics",
    course_id : 308,
    group_weight : 25,
    assignments : [
        {
            id : 1,
            name : "Data Manipulation with JavaScript",
            due_at : "2024-09-26",
            points_possible : 50
        },
        {
            id : 2,
            name : "Control Flow",
            due_at : "2024-09-27",
            points_possible : 100
        },
        {
            id : 3,
            name : "Loops and Iteration",
            due_at : "2024-09-28",
            points_possible : 150
        },
        {
            id : 4,
            name : "Data Collections",
            due_at : "2024-09-29",
            points_possible : 200
        },
        {
            id : 5,
            name : "Functions and Scope",
            due_at : "2024-09-30",
            points_possible : 250
        }

    ]

};

const learnerSubmission = [ 
    {
        learner_id : 47,
        assigment_id : 1,
        submission : {
            submitted_at : "2024-09-26",
            score : 48
        }
    },

    {
        learner_id : 47,
        assigment_id : 2,
        submission : {
            submitted_at : "2024-09-27",
            score : 95
        }
    },

    {
        learner_id : 47,
        assigment_id : 3,
        submission : {
            submitted_at : "2024-09-28",
            score : 148
        }
    },

    {
        learner_id : 47,
        assigment_id : 4,
        submission : {
            submitted_at : "2024-09-29",
            score : 180
        }
    },

    {
        learner_id : 47,
        assigment_id : 5,
        submission : {
            submitted_at : "2024-09-30",
            score : 248
        }
    },

    {
        learner_id : 74,
        assigment_id : 1,
        submission : {
            submitted_at : "2024-09-26",
            score : 40
        }
    },

    {
        learner_id : 74,
        assigment_id : 2,
        submission : {
            submitted_at : "2024-09-27",
            score : 85
        }
    },

    {
        learner_id : 74,
        assigment_id : 3,
        submission : {
            submitted_at : "2024-09-28",
            score : 130
        }
    },

    {
        learner_id : 74,
        assigment_id : 4,
        submission : {
            submitted_at : "2024-09-29",
            score : 175
        }
    },

    {
        learner_id : 74,
        assigment_id : 5,
        submission : {
            submitted_at : "2024-09-30",
            score : 220
        }
    },

    {
        learner_id : 96,
        assigment_id : 1,
        submission : {
            submitted_at : "2024-09-26",
            score : 35
        }
    },

    {
        learner_id : 96,
        assigment_id : 2,
        submission : {
            submitted_at : "2024-09-28",
            score : 70
        }
    },

    {
        learner_id : 96,
        assigment_id : 3,
        submission : {
            submitted_at : "2024-09-29",
            score : 110
        }
    },

    {
        learner_id : 96,
        assigment_id : 4,
        submission : {
            submitted_at : "2024-09-30",
            score : 150
        }
    },

    {
        learner_id : 96,
        assigment_id : 5,
        submission : {
            submitted_at : "2024-09-30",
            score : 200
        }
    }
];

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    const result = [];
    const currentDate = "2024-09-30";

    const learners = {};

    learnerSubmissions.forEach(submission => {
        const { learner_id, assigment_id, submission: submissionData } = submission;

        const assignment = assignmentGroup.assignments.find(a => a.id === assigment_id);

        if (!assignment || assignment.due_at > currentDate) return;

        learners[learner_id] = learners[learner_id] || { id: learner_id, avg: 0, totalPointsEarned: 0, totalPointsPossible: 0 };

        const percentage = submissionData.score / assignment.points_possible;

        learners[learner_id][assigment_id] = percentage;
        learners[learner_id].totalPointsEarned += submissionData.score;
        learners[learner_id].totalPointsPossible += assignment.points_possible;
    });

    for (const learner_id in learners) {
        const learner = learners[learner_id];
        learner.avg = (learner.totalPointsEarned / learner.totalPointsPossible) * 100;
        delete learner.totalPointsEarned;
        delete learner.totalPointsPossible;
        result.push(learner);
    }
    return result;
}

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmission));
