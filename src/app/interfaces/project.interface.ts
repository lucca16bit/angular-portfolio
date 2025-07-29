export interface Project {
    title: string;
    imageUrl: string;
    description: string;
    modalDescription: string;
    techsUsed: string;
    demo: string;
    repository: string;
    apiRepository?: string;
    techs: { name: string; icon: string }[];
}
