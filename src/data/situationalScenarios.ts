export interface Scenario {
  id: number;
  competency: string;
  situation: string;
  question: string;
  options: {
    text: string;
    explanation: string;
    traits: {
      analytical: number;
      collaborative: number;
      decisive: number;
      empathetic: number;
      innovative: number;
    };
  }[];
}

export const scenarios: Scenario[] = [
  // Time Management & Prioritization (20 scenarios)
  {
    id: 1,
    competency: "Time Management & Prioritization",
    situation: "You arrive at work on Monday morning to find 20 unread emails, three urgent requests from different team members, and a report due by end of day that requires 4 hours of work.",
    question: "How would you handle this situation?",
    options: [
      {
        text: "Start with the report since it has a fixed deadline and will take the most time",
        explanation: "This approach prioritizes individual deliverables and structured time management",
        traits: {
          analytical: 4,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Quickly scan emails for critical issues, then create a prioritized task list before starting any work",
        explanation: "This balanced approach demonstrates analytical thinking and systematic problem-solving",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Immediately respond to the urgent team requests since they involve others' work",
        explanation: "This response prioritizes team needs and collaborative work",
        traits: {
          analytical: 2,
          collaborative: 5,
          decisive: 3,
          empathetic: 4,
          innovative: 2
        }
      },
      {
        text: "Work on multiple tasks simultaneously to try to complete everything",
        explanation: "This approach shows adaptability but may impact work quality",
        traits: {
          analytical: 1,
          collaborative: 2,
          decisive: 2,
          empathetic: 3,
          innovative: 4
        }
      }
    ]
  },
  {
    id: 2,
    competency: "Time Management & Prioritization",
    situation: "You're managing three projects with overlapping deadlines next week. One is high-visibility but not urgent, another is urgent but smaller in scope, and the third is complex but has some flexibility in timing.",
    question: "How would you prioritize these projects?",
    options: [
      {
        text: "Focus on completing the urgent project first, then tackle the high-visibility project, leaving the complex one for last",
        explanation: "This approach balances urgency with strategic importance",
        traits: {
          analytical: 4,
          collaborative: 2,
          decisive: 5,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Create a detailed project plan that allocates time to all three projects based on their requirements and deadlines",
        explanation: "This systematic approach ensures balanced progress across all projects",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 4
        }
      },
      {
        text: "Delegate parts of each project to team members while maintaining oversight of all three",
        explanation: "This collaborative approach leverages team resources effectively",
        traits: {
          analytical: 3,
          collaborative: 5,
          decisive: 4,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Focus solely on the high-visibility project to ensure it's perfect",
        explanation: "This approach prioritizes visibility over urgency and efficiency",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 3,
    competency: "Time Management & Prioritization",
    situation: "A critical system is down, affecting multiple teams, and you receive simultaneous requests for assistance from different departments.",
    question: "What would be your approach to handling this situation?",
    options: [
      {
        text: "Assess the impact on each department and prioritize based on business criticality",
        explanation: "This analytical approach ensures resources are allocated where most needed",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Set up a quick emergency response team meeting to coordinate efforts",
        explanation: "This collaborative approach ensures coordinated response",
        traits: {
          analytical: 3,
          collaborative: 5,
          decisive: 4,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Handle requests in the order they were received",
        explanation: "This approach is fair but may not optimize for business impact",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 3,
          empathetic: 3,
          innovative: 1
        }
      },
      {
        text: "Focus on the department that's most vocal about their needs",
        explanation: "This reactive approach may miss critical priorities",
        traits: {
          analytical: 1,
          collaborative: 2,
          decisive: 2,
          empathetic: 3,
          innovative: 1
        }
      }
    ]
  },
  // Communication & Conflict Resolution (20 scenarios)
  {
    id: 4,
    competency: "Communication & Conflict Resolution",
    situation: "During a team meeting, a colleague repeatedly interrupts and dismisses your ideas about a new project approach.",
    question: "What would be the most appropriate way to handle this situation?",
    options: [
      {
        text: "Schedule a private conversation with the colleague to discuss communication styles and find common ground",
        explanation: "This diplomatic approach balances assertiveness with relationship building",
        traits: {
          analytical: 4,
          collaborative: 4,
          decisive: 3,
          empathetic: 5,
          innovative: 3
        }
      },
      {
        text: "Address the behavior directly in the meeting, asking for equal time to share ideas",
        explanation: "This direct approach shows leadership but may create tension",
        traits: {
          analytical: 3,
          collaborative: 2,
          decisive: 5,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Document your ideas in writing and share them with the team after the meeting",
        explanation: "This passive approach avoids conflict but may not address the core issue",
        traits: {
          analytical: 4,
          collaborative: 2,
          decisive: 2,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Immediately escalate the situation to your manager",
        explanation: "This formal approach may damage peer relationships",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 5,
    competency: "Communication & Conflict Resolution",
    situation: "You discover that a colleague has been taking credit for your work in communications with senior management.",
    question: "How would you address this situation?",
    options: [
      {
        text: "Have a direct conversation with your colleague to understand their perspective and express your concerns",
        explanation: "This professional approach addresses the issue while maintaining relationships",
        traits: {
          analytical: 3,
          collaborative: 4,
          decisive: 4,
          empathetic: 5,
          innovative: 2
        }
      },
      {
        text: "Start copying senior management on all your work updates",
        explanation: "This passive-aggressive approach may escalate tensions",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Document instances of this behavior and present them to HR",
        explanation: "This formal approach may be premature without direct communication",
        traits: {
          analytical: 4,
          collaborative: 1,
          decisive: 3,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Discuss the situation with your manager and seek their guidance",
        explanation: "This balanced approach seeks proper channels for resolution",
        traits: {
          analytical: 4,
          collaborative: 3,
          decisive: 3,
          empathetic: 4,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 6,
    competency: "Communication & Conflict Resolution",
    situation: "A client is upset about a project delay and has sent a strongly worded email copying senior management.",
    question: "How would you handle this situation?",
    options: [
      {
        text: "Draft a detailed response explaining all the technical reasons for the delay",
        explanation: "This analytical approach may not address the emotional aspect of the situation",
        traits: {
          analytical: 5,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 2
        }
      },
      {
        text: "Call the client immediately to discuss their concerns and propose solutions",
        explanation: "This proactive approach shows empathy and commitment to resolution",
        traits: {
          analytical: 3,
          collaborative: 4,
          decisive: 5,
          empathetic: 5,
          innovative: 3
        }
      },
      {
        text: "Schedule a meeting with the team first to align on a response strategy",
        explanation: "This collaborative approach ensures a unified response but may delay addressing the client's concerns",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 2,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Forward the email to your manager to handle the situation",
        explanation: "This avoids direct responsibility and may damage client relationships",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 1,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 7,
    competency: "Leadership & Decision Making",
    situation: "Your team has been consistently missing sprint deadlines due to underestimated work complexity.",
    question: "What would be your approach to address this issue?",
    options: [
      {
        text: "Implement a more rigorous estimation process with detailed task breakdown",
        explanation: "This analytical approach improves planning accuracy",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Hold a team retrospective to identify bottlenecks and gather improvement ideas",
        explanation: "This collaborative approach engages the team in problem-solving",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 4,
          innovative: 4
        }
      },
      {
        text: "Extend sprint durations to accommodate the complexity",
        explanation: "This simple solution may not address underlying issues",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 3,
          empathetic: 3,
          innovative: 1
        }
      },
      {
        text: "Add more team members to handle the workload",
        explanation: "This reactive approach may not solve the estimation problem",
        traits: {
          analytical: 2,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 8,
    competency: "Problem Solving & Innovation",
    situation: "A critical automated test suite is becoming unreliable with frequent false failures, slowing down deployments.",
    question: "How would you address this issue?",
    options: [
      {
        text: "Analyze test failure patterns and implement targeted fixes",
        explanation: "This systematic approach addresses root causes",
        traits: {
          analytical: 5,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Rewrite the entire test suite using modern testing frameworks",
        explanation: "This innovative approach provides a fresh start but requires significant effort",
        traits: {
          analytical: 3,
          collaborative: 2,
          decisive: 4,
          empathetic: 1,
          innovative: 5
        }
      },
      {
        text: "Form a task force with QA and dev teams to improve test reliability",
        explanation: "This collaborative approach leverages diverse expertise",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 4,
          innovative: 4
        }
      },
      {
        text: "Disable the most problematic tests temporarily",
        explanation: "This quick fix compromises quality assurance",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 3,
          empathetic: 2,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 9,
    competency: "Professional Ethics & Integrity",
    situation: "You discover a security vulnerability in your company's product that affects a small number of users.",
    question: "What would be your immediate action?",
    options: [
      {
        text: "Report it through proper channels and begin working on a fix immediately",
        explanation: "This responsible approach prioritizes user security and company integrity",
        traits: {
          analytical: 4,
          collaborative: 4,
          decisive: 5,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Assess the potential impact before deciding whether to report it",
        explanation: "This analytical approach delays addressing a known security issue",
        traits: {
          analytical: 5,
          collaborative: 2,
          decisive: 2,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Fix the issue quietly without formal reporting",
        explanation: "This approach lacks transparency and proper security protocols",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Inform affected users directly before notifying internal teams",
        explanation: "This approach may create unnecessary panic without a solution ready",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 3,
          empathetic: 4,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 10,
    competency: "Teamwork & Collaboration",
    situation: "A new team member is struggling to understand the codebase and their tasks are taking longer than expected.",
    question: "How would you help improve this situation?",
    options: [
      {
        text: "Offer to pair program with them on their next few tasks",
        explanation: "This hands-on approach provides direct support and learning opportunities",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 5,
          innovative: 3
        }
      },
      {
        text: "Create detailed documentation of the codebase architecture",
        explanation: "This systematic approach helps all team members but takes time",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 2,
          empathetic: 3,
          innovative: 4
        }
      },
      {
        text: "Suggest they spend time reading the existing codebase",
        explanation: "This passive approach may not address specific challenges",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 2,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Reassign them to simpler tasks until they get up to speed",
        explanation: "This may limit learning opportunities and affect confidence",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 4,
          empathetic: 2,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 11,
    competency: "Time Management & Prioritization",
    situation: "Your team has been asked to take on a new high-priority project while already at full capacity with existing commitments.",
    question: "How would you handle this situation?",
    options: [
      {
        text: "Create a detailed impact analysis of adding the new project and propose timeline adjustments",
        explanation: "This analytical approach provides data for informed decision-making",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Meet with stakeholders to negotiate priorities and adjust existing commitments",
        explanation: "This collaborative approach balances multiple stakeholder needs",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 4,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Accept the new project and require the team to work overtime",
        explanation: "This approach risks team burnout and quality issues",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 4,
          empathetic: 1,
          innovative: 1
        }
      },
      {
        text: "Decline the new project outright due to current commitments",
        explanation: "This rigid approach may damage relationships and miss opportunities",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 2,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 12,
    competency: "Leadership & Decision Making",
    situation: "Two senior team members strongly disagree on the technical architecture for a new feature.",
    question: "How would you help resolve this disagreement?",
    options: [
      {
        text: "Facilitate a technical discussion where both present their proposals with pros and cons",
        explanation: "This structured approach promotes objective evaluation",
        traits: {
          analytical: 5,
          collaborative: 4,
          decisive: 3,
          empathetic: 4,
          innovative: 4
        }
      },
      {
        text: "Create a prototype of both approaches to compare practical outcomes",
        explanation: "This hands-on approach provides concrete evidence",
        traits: {
          analytical: 4,
          collaborative: 3,
          decisive: 4,
          empathetic: 3,
          innovative: 5
        }
      },
      {
        text: "Make the final decision yourself based on your understanding",
        explanation: "This authoritative approach may not utilize team expertise",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 5,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Let them continue debating until they reach agreement",
        explanation: "This passive approach may delay progress indefinitely",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 1,
          empathetic: 3,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 13,
    competency: "Problem Solving & Innovation",
    situation: "User feedback indicates that a recent UI update has made the application less accessible for users with disabilities.",
    question: "How would you address this accessibility issue?",
    options: [
      {
        text: "Conduct an accessibility audit and implement fixes based on WCAG guidelines",
        explanation: "This comprehensive approach ensures standards compliance",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Engage with affected users to understand specific challenges and test solutions",
        explanation: "This user-centered approach provides direct insight",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 5,
          innovative: 4
        }
      },
      {
        text: "Revert to the previous UI version temporarily",
        explanation: "This quick fix doesn't address the underlying issues",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 4,
          empathetic: 3,
          innovative: 1
        }
      },
      {
        text: "Add alternative navigation options while keeping the new UI",
        explanation: "This compromise may complicate the user experience",
        traits: {
          analytical: 3,
          collaborative: 2,
          decisive: 3,
          empathetic: 3,
          innovative: 4
        }
      }
    ]
  },
  {
    id: 14,
    competency: "Communication & Conflict Resolution",
    situation: "A team member frequently submits pull requests with minimal documentation and inconsistent code formatting.",
    question: "How would you address this situation?",
    options: [
      {
        text: "Set up automated tools for code formatting and documentation checks",
        explanation: "This systematic approach ensures consistent standards",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 4
        }
      },
      {
        text: "Have a private conversation about the importance of code quality and team standards",
        explanation: "This direct approach addresses the issue while maintaining respect",
        traits: {
          analytical: 3,
          collaborative: 4,
          decisive: 4,
          empathetic: 5,
          innovative: 2
        }
      },
      {
        text: "Leave detailed comments on each pull request pointing out the issues",
        explanation: "This reactive approach may create tension",
        traits: {
          analytical: 4,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 2
        }
      },
      {
        text: "Reject all pull requests that don't meet documentation standards",
        explanation: "This strict approach may damage team relationships",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 5,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 15,
    competency: "Professional Ethics & Integrity",
    situation: "You notice that a colleague is using unlicensed software for work-related tasks.",
    question: "What would be the most appropriate action?",
    options: [
      {
        text: "Inform them about the legal implications and suggest legitimate alternatives",
        explanation: "This supportive approach addresses the issue while maintaining relationships",
        traits: {
          analytical: 4,
          collaborative: 4,
          decisive: 3,
          empathetic: 5,
          innovative: 3
        }
      },
      {
        text: "Report the violation to IT security immediately",
        explanation: "This by-the-book approach may be premature",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 5,
          empathetic: 1,
          innovative: 1
        }
      },
      {
        text: "Ignore it since it's not your responsibility",
        explanation: "This avoidant approach neglects professional responsibility",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 1,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Research and propose a company-wide software licensing solution",
        explanation: "This proactive approach addresses the broader issue",
        traits: {
          analytical: 5,
          collaborative: 4,
          decisive: 4,
          empathetic: 3,
          innovative: 4
        }
      }
    ]
  },
  {
    id: 16,
    competency: "Teamwork & Collaboration",
    situation: "During a code review, you notice a much better way to implement a feature that a junior developer has worked hard on.",
    question: "How would you handle this situation?",
    options: [
      {
        text: "Schedule a pair programming session to discuss and implement improvements together",
        explanation: "This collaborative approach promotes learning and maintains motivation",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 5,
          innovative: 4
        }
      },
      {
        text: "Leave detailed comments explaining the better approach in the code review",
        explanation: "This analytical approach may overwhelm the developer",
        traits: {
          analytical: 5,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Approve the code since it works, but mention the alternative in passing",
        explanation: "This passive approach misses a learning opportunity",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 2,
          empathetic: 4,
          innovative: 1
        }
      },
      {
        text: "Rewrite the code yourself to demonstrate the better approach",
        explanation: "This may discourage the developer and reduce ownership",
        traits: {
          analytical: 4,
          collaborative: 1,
          decisive: 4,
          empathetic: 1,
          innovative: 3
        }
      }
    ]
  },
  {
    id: 17,
    competency: "Problem Solving & Innovation",
    situation: "A critical performance issue is reported in production, but the root cause isn't immediately obvious.",
    question: "What would be your approach to investigating this issue?",
    options: [
      {
        text: "Implement comprehensive logging and monitoring to gather more data",
        explanation: "This systematic approach helps identify patterns",
        traits: {
          analytical: 5,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 4
        }
      },
      {
        text: "Form a war room with key team members to analyze the issue together",
        explanation: "This collaborative approach leverages team expertise",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 4,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Roll back recent changes until the issue is resolved",
        explanation: "This reactive approach may provide quick relief but doesn't solve the problem",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 5,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Try different quick fixes until something works",
        explanation: "This approach may cause additional issues",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 18,
    competency: "Leadership & Decision Making",
    situation: "Your team needs to choose between two competing technologies for a new project, with valid arguments for both.",
    question: "How would you approach this decision?",
    options: [
      {
        text: "Create a proof of concept with both technologies to compare real-world performance",
        explanation: "This hands-on approach provides concrete data",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 5
        }
      },
      {
        text: "Organize a team workshop to evaluate pros and cons together",
        explanation: "This inclusive approach builds consensus",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 3,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Choose the more established technology to minimize risk",
        explanation: "This conservative approach may miss innovation opportunities",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 4,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Let each team member vote and go with the majority",
        explanation: "This democratic approach may not lead to the best technical decision",
        traits: {
          analytical: 2,
          collaborative: 4,
          decisive: 2,
          empathetic: 3,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 19,
    competency: "Communication & Conflict Resolution",
    situation: "A stakeholder is pushing for a rushed release despite known quality concerns.",
    question: "How would you handle this pressure?",
    options: [
      {
        text: "Present data showing the risks and costs of rushing versus proper testing",
        explanation: "This analytical approach provides objective justification",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Propose a phased release approach with critical features first",
        explanation: "This innovative approach balances urgency with quality",
        traits: {
          analytical: 4,
          collaborative: 4,
          decisive: 4,
          empathetic: 3,
          innovative: 5
        }
      },
      {
        text: "Agree to the timeline but document your concerns in writing",
        explanation: "This passive approach may lead to quality issues",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 2,
          empathetic: 2,
          innovative: 1
        }
      },
      {
        text: "Escalate to senior management for intervention",
        explanation: "This approach may damage stakeholder relationships",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 20,
    competency: "Professional Ethics & Integrity",
    situation: "You discover that a third-party library your team uses has a security vulnerability, but upgrading it will require significant refactoring.",
    question: "What would be your course of action?",
    options: [
      {
        text: "Immediately begin the upgrade process and adjust project timelines",
        explanation: "This responsible approach prioritizes security",
        traits: {
          analytical: 4,
          collaborative: 3,
          decisive: 5,
          empathetic: 3,
          innovative: 3
        }
      },
      {
        text: "Develop a mitigation plan while preparing for the upgrade",
        explanation: "This balanced approach manages risk while planning properly",
        traits: {
          analytical: 5,
          collaborative: 4,
          decisive: 4,
          empathetic: 3,
          innovative: 4
        }
      },
      {
        text: "Look for alternative libraries to avoid the refactoring effort",
        explanation: "This approach may just delay addressing the real issue",
        traits: {
          analytical: 3,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 4
        }
      },
      {
        text: "Implement temporary patches until there's more time for the upgrade",
        explanation: "This short-term fix may compound technical debt",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 3,
          empathetic: 2,
          innovative: 3
        }
      }
    ]
  }
]; 